import React,{useEffect, useState} from "react";
import axios from "axios";

function DataFetching(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users/6')
    .then(res=>{
        setLoading(false)
        setPost(res.data)
        setError('')
    })
    .catch((e)=>{
        console.log(e)
        setLoading(false)
        setPost({})
        setError('')
    })
},[])

    return(
        <div>
            
                {loading ? 'loading': post.title}
                {error ? 'error': null}
              
        </div>
    )
}
export default DataFetching