import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

// export const useTheme= ()=>{ 
//     const  [isdark, setisdark] =  useContext(ThemeContext)
//     return [isdark, setisdark]
// }

export const useTheme= ()=>useContext(ThemeContext)