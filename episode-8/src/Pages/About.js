import React from 'react'
import {useNavigate} from 'react-router-dom'
export const About=() =>{
    let navigate = useNavigate()
    return (
    <React.Fragment>
    <div>This is About page</div>
    <button onClick={()=> { navigate("/")}}>Go to home page</button>
    </React.Fragment>)
}