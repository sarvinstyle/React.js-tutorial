import {useParams} from 'react-router-dom'

export const Profile=() =>{
    const {name , id} = useParams()
    return <div>This is Profile page of {name} - {id}</div>
}