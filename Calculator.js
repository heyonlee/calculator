import { useState } from "react";

function Calculator() {

  const [firstInput, setFirstinput] = useState("");
  const [secondInput,setSecondinput] = useState("");


  const [result,setResult]=useState("")



 
const add=()=>{
  return setResult(+firstInput + +secondInput)
}
const sub=()=>{
    return setResult(firstInput - secondInput)  
 
}

const divide=()=>{
    return setResult(firstInput / secondInput)
}
const multiply=()=>{
    return setResult(firstInput * secondInput)

}


  

  return (
    <div className="container">
      <h1>Add with React!</h1>

      <form className="add">
        <input type="number" name="value1" onChange={(e)=>{setFirstinput(e.target.value)}} />
        <br/>
        <input type="number" name="value2" onChange={(e)=>{setSecondinput(e.target.value)}} />
        <span><button onClick={add} >+</button></span>
        <span><button onClick={sub} >-</button></span>
        <span><button onClick={divide} >/</button></span>
        <span><button onClick={multiply} >*</button></span>

       

        <span>=</span>

        <h3>Result</h3>
        <div>{result}</div>
      </form>
    </div>
  );
}

export default Calculator;
