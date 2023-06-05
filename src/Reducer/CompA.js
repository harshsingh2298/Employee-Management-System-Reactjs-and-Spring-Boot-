import React,{useContext} from "react";
import CompB from "./CompB";
import { CountContext } from "../App";

function CompA(){

    const countContext = useContext(CountContext)

    return(
        <div>
            Component A
            <button onClick={()=>countContext.countDispatch('increment')}>Incriment</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            <button onClick={()=>countContext.countDispatch('decriment')}>Decriment</button>
               
        </div>
    )
}
export default CompA