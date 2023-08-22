import {useContext} from 'react'
import { ProfileContext } from '../App'

export const Home=() =>{
    const {username} = useContext(ProfileContext)
 return <div>home page - username is {username} </div> 
}
