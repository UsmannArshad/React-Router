import React from "react";
import {useLocation,Link } from "react-router-dom";
const About=()=>{
    const location=useLocation()
    //const Match=useMatch(location.pathname)
    //console.log(window.location)
    //console.log(location)
    //console.log(Match)
return (
    <>
    <h1>About</h1>
    <Link to={{
        pathname:`${location.pathname}/readme`    ////now it will go to about/readme
    }}>Read More</Link>
    </>
);
}

export default About;