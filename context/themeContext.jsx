import { createContext, useState } from "react";


export const ThemeContext = createContext("theme")


export function Themeprovider({children}){
    // console.log(children)
    const[isdark, setisdark] = useState(JSON.parse(localStorage.getItem('isdark')))

    return <ThemeContext.Provider value={[isdark, setisdark]}>{children}</ThemeContext.Provider>
}