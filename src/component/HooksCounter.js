import React ,{useState,useEffect}from 'react';


function HooksCounter() {
    const initialCount = 0
const [count,setCounter] = useState(initialCount)
const incrimentFive=()=>{
      for(let i=0;i<10;i++){
        setCounter(count=>count+10)
      }
}
useEffect(()=>{
    document.title=`you clicked ${count} times`
  }) 
    return(
        
           <><div>
            <button onClick={() => setCounter(count + 1)}>Add </button>
            <div>{count}</div>
            <button onClick={() => setCounter(count - 1)}>Sub</button>
        </div><br></br>
        <button onClick={()=>setCounter(initialCount)}>Reset</button>
        <button onClick={()=>setCounter(count+1)}>Increment</button>
        <div>Count: {count}
        <button onClick={()=>setCounter(count-1)}>Decrement</button>
        <button onClick={incrimentFive}>Increment Five</button>
        
        
        </div></>
           
        
    )
    
}

export default HooksCounter
