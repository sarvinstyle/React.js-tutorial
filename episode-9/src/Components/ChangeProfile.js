import { useContext, useState } from "react"
import { ProfileContext } from "../App"

export const ChangeProfile =() =>{
    const {setUsername} = useContext(ProfileContext)
    const [newUsername , setNewUserName] = useState("")
    return(
        <div>
            <input onChange={(event)=>{ setNewUserName(event.target.value)}}  />
            <button onClick={()=>{setUsername(newUsername)}}>Change UserName</button>
        </div>
    )
}