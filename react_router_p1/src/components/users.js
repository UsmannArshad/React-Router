import React from "react";
import { useParams } from "react-router-dom";
const Users=()=>{
    const {name}=useParams()
    console.log(name)
return (
    <>
    {name===undefined ? <h1>Please write some name after /</h1>:<h1>Current User is {name}</h1>}
    </>
);
}

export default Users;