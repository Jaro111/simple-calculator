import { useState } from 'react'
import "./App.css"
import { evaluate } from 'mathjs'


const App = () => {
  const [btnValue, setbtnValue] = useState("")
  const [result, setResult ] = useState(0)

  
const clickHandler = (newChars) => {
  let resultValue = ""
  let tempResult = ""
  

  if (newChars !== "=") {
      if (newChars !== "CE")
      {setbtnValue(btnValue + newChars)
      
          if(newChars === "√") {
            resultValue =  Math.sqrt(btnValue)
            setResult(resultValue)
            setbtnValue(resultValue)
          }
          else if(newChars == 'x ²') {
            resultValue =  btnValue * btnValue
            setResult(resultValue)
            setbtnValue(resultValue)} 

          else if (newChars === "%") {
            const newArray = btnValue.split("*")
            resultValue = newArray[0] * (newArray[1]/100)
            } 
    
      }
      else {
        setbtnValue("")
        setResult(0)}
    
  }else{
    resultValue = evaluate(btnValue)

    if (resultValue === Infinity) {
      setResult("You can't divide by 0")
      setbtnValue("")
    }
    else {
      setResult(resultValue)
      setbtnValue(resultValue)
    }
  
  }

  
  
    
  

}


  const buttons = ["CE", "√","%","/" ,"7", "8", "9", "*","4", "5", "6","-","1", "2", "3","+", "0",".",'x ²',"="]
  return (

    <div className='play'>

      <div className='calcFrame'>

          <div className='display'>
            <p>{btnValue}</p>
            <h2>{result}</h2>
          </div>

          <div className='buttonArea'>
              {buttons.map((buttons, index) => {
              return <Button key = {index} value={buttons} click = {() => clickHandler(buttons)} />
              
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
