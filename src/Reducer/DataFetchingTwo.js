import React,{useEffect, useReducer} from "react";
import axios from "axios";


const initialSatate = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'Data Fetched':
        return {
            loading: false,
            post:action.payload,
            error:''
        }
        case 'Fetch Error':
        return{
            loading: false,
            post:{},
            error:"somthing went wrong"
        }
        default :
        return state
    }

}

function DataFetchingTwo(){
 const [state, dispatch] = useReducer(reducer,initialSatate)

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(res=>{
       dispatch({type: 'Data Fetched', payload: res.data })
    })
    .catch((e)=>{
    dispatch({type:'Fetch Error'})
    })
},[])

    return(
        <div>
            
                {state.loading ? 'loading': state.post.title}
                {state.error ? 'error': null}
              
        </div>
    )
}
export default DataFetchingTwo