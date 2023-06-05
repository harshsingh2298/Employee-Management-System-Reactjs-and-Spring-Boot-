import React,{useReducer} from "react";


const initialSatate = {
    firstCounter : 0
}

const reducer = (state, action)=>{
    switch(action.type)
    {
        case 'increment':
            return {firstCounter:state.firstCounter+ action.value}
        case 'decriment':
            return {firstCounter:state.firstCounter- action.value}
        case 'reset':
            return initialSatate 
        default :
        return state           
    }

}

function CounterTwo(){
   const [count, dispatch] = useReducer(reducer, initialSatate)

    return(
        <div>
            <div>------------------------Using Reducer part 2--------------------</div>
            <div>Count - {count.firstCounter}</div>
           
            <button onClick={()=>dispatch({type: 'increment',value:1})}>Incriment</button>
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
            <button onClick={()=>dispatch({type: 'decriment',value:1})}>Decriment</button>
            <button onClick={()=>dispatch({type: 'increment',value: 5})}>Incriment 5</button>
            <button onClick={()=>dispatch({type: 'decriment', value: 5})}>Decriment 5</button>
            <div>-----------------------------------------------------------</div>
        </div>
    )
}
export default CounterTwo