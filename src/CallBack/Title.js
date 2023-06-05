import React from "react";

function Title(){
console.log('Tiltle Rendring')

    return(
        <div>
                <h2>
                    useCallBack Hook
                </h2>
        </div>
    )
}
export default React.memo(Title)