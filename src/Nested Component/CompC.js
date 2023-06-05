import React from "react";
import { UserContext } from "../App";
import { ChannelContext } from "../App"; 

function CompC(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                        <ChannelContext.Consumer>
                            {
                               channel => 
                            {
                                return <h1>Hello {user} {channel}</h1>
                            }
                            } 
                         </ChannelContext.Consumer>
                        )}  }
            </UserContext.Consumer>
        </div>
    )
}
export default CompC