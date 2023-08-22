import { useState } from "react"

export const useCount=(intialValue = 0)=>{
    const [ count ,setCount] = useState(intialValue)
    const increase =()=>{
        setCount((prev)=> prev+1)
    }
    const decrease =()=>{
        setCount((prev)=> prev-1)
    }
    const reset =()=>{
        setCount(0)
    }
    return {count , increase , decrease , reset}
}