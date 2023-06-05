import React,{useReducer} from "react";


const initialSatate = 0;

const reducer = (state, action)=>{
    switch(action)
    {
        case 'increment':
            return state + 1
        case 'decriment':
            return state-1
        case 'reset':
            return initialSatate 
        default :
        return state           
    }

}

function CounterThree(){
   const [count, dispatch] = useReducer(reducer, initialSatate)
   const [countTwo, dispatchTwo] = useReducer(reducer, initialSatate)

    return(
        <div>
            <div>------------------------Using Reducer--------------------</div>
            <div>Count - {count}</div>
           
            <button onClick={()=>dispatch('increment')}>Incriment</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <button onClick={()=>dispatch('decriment')}>Decriment</button>
            <div>-----------------------------------------------------------</div>
            <div>------------------------Using Reducer Two--------------------</div>
            <div>Count - {countTwo}</div>
           
            <button onClick={()=>dispatchTwo('increment')}>Incriment</button>
            <button onClick={()=>dispatchTwo('reset')}>Reset</button>
            <button onClick={()=>dispatchTwo('decriment')}>Decriment</button>
            <div>-----------------------------------------------------------</div>
        </div>
    )
}
export default CounterThree