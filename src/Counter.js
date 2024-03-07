import React, { useState } from "react"
function Counter(){
   let [counter,setCounter] = useState(0)

    function addValue(){
        // console.log("clicked", counter);
        setCounter(counter)
        if(counter==20){
            counter = 0
        }
        else{
            counter++
        }    
    }
 
    
 
    const removeValue = ()=>{
      setCounter(counter)
      if(counter==-20){
        counter = 0
      }
      else{
        counter--
      }
    }

    return(
                <>
                <h2>Counter Value:{counter} </h2>
                <button onClick={addValue}>Add Value</button>
                <br></br>
                <button onClick={removeValue}>Decrease Value</button>
                </>
            )
}
export default Counter;
