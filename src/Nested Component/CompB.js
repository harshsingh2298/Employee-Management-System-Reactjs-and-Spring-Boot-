import React,{useContext} from "react";
import CompC from "./CompC";
import { UserContext,ChannelContext } from "../App";

function CompB(){


  const user =  useContext(UserContext)
  const channel =  useContext(ChannelContext)
    return(
        <div>
                {user} {channel}
        </div>
    )
}
export default CompB