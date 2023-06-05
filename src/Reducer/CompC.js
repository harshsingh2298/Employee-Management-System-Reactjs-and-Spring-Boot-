import React,{useContext} from "react";
import CompB from "./CompB";
import { CountContext } from "../App";

function CompC(){

    const countContext = useContext(CountContext)

    return(
        <div>
            Component C
            <button onClick={()=>countContext.countDispatch('increment')}>Incriment</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            <button onClick={()=>countContext.countDispatch('decriment')}>Decriment</button>
                
        </div>
    )
}
export default CompC