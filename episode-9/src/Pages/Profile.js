import { useContext } from "react"
import { ChangeProfile } from "../Components/ChangeProfile"
import { ProfileContext } from "../App"

export const Profile=() =>{
    const {username} = useContext(ProfileContext)
    return <div>Profile Page - username is {username}
    <ChangeProfile />
    </div>
}