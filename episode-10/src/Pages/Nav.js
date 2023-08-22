import {Link} from "react-router-dom"
export const Nav=()=>{
    return(      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/contact">Contact me</Link> 
      </nav>)
}