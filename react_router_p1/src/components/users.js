import React from "react";
import { useParams,useNavigate } from "react-router-dom";
const Users=()=>{
    const {name}=useParams()
    let navigate=useNavigate()
    //if name is ali then go back to home oyherwise render page
return (
    <>
    {name==='ali' ? navigate('/'):name===undefined ? <h1>Please write some name after /</h1>:<h1>Current User is {name}</h1>}
    </>
);
}

export default Users;