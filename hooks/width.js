import { useEffect, useState } from "react"

export const useWidowsSize = ()=>{

const[windowSize, setWindowSize] = useState({height:window.innerHeight, width:window.innerWidth})

useEffect(()=>{
    window.addEventListener('resize', ()=>{
        setWindowSize({height:window.innerHeight, width:window.innerWidth})
      })
}, [])
   
return windowSize
}