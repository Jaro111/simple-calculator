import { useState } from 'react'
import "./App.css"
import { evaluate } from 'mathjs'

// Simple calculator
const App = () => {
  // Current value typed
  const [btnValue, setbtnValue] = useState("")
  // Result value
  const [result, setResult ] = useState(0)




// Variable to store result
const clickHandler = (newChars) => {
  let resultValue = ""

  if (newChars !== "=") {
      if (newChars !== "CE")
      {setbtnValue(btnValue + newChars)
      
          if(newChars === "√") {
            // sqrt calculated by math function
            resultValue =  Math.sqrt(btnValue)
            setResult(resultValue)
            setbtnValue(resultValue)
          }
          else if(newChars == 'x ²') {
            // To power
            resultValue =  btnValue * btnValue
            setResult(resultValue)
            setbtnValue(resultValue)} 

          else if (newChars === "%") {
            // %
            const newArray = btnValue.split("*")
            resultValue = newArray[0] * (newArray[1]/100)
            } 
    
      }
      else {
        // Reset button. If pressed reset result an local value to 0
        setbtnValue("")
        setResult(0)}
    
  }else{
    resultValue = evaluate(btnValue)

    if (resultValue === Infinity) {
      // Showing comment if we want to divide by 0
      setResult("You can't divide by 0")
      setbtnValue("")
    }
    else {
      setResult(resultValue)
      setbtnValue(resultValue)
    }
  
  }


}



  const buttons = ["","", "", "","CE", "√","%","/" ,"7", "8", "9", "*","4", "5", "6","-","1", "2", "3","+",".", "0",'x ²',"="]
  return (

    <div className='play'>

      <div className='calcFrame'>

          <div className='display'>
            <p>{btnValue}</p>
            <h2>{result}</h2>
          </div>

          <div className='buttonArea'>
              {buttons.map((buttons, index) => {
                // Event to get typed values
              return <Button key = {index} value={buttons} click = {() => clickHandler(buttons)} onKeyUp={(event) => handleKeyPress(event)}/>
              
              })
              }
           
          </div>
      </div>
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.click}>{props.value}</button>
}
export default App
