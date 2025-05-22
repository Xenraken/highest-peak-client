import { useState } from "react";
import { useNavigate } from "react-router";


function About() 
{
    const [name, setName] = useState();
    const navigate = useNavigate();
    return <h1 onClick={() => {setName("kahpeahmet")}}>Hello, I am the about {name}</h1>
}


export default About;