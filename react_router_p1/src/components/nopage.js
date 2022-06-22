import React,{useEffect} from "react";
import { useNavigate} from "react-router-dom";
const Error=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        let timeinterval=setTimeout(()=>{
        navigate('/') 
        },2000)         
        return()=>{clearInterval(timeinterval)
    }
    })
return (
    <>
    <h1>OOps Page not found</h1>
    </>
);
}

export default Error;