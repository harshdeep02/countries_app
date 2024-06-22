import React, {useContext, useState}from 'react'
import Search from './Search'
import '../style.css'
import CountryList from './CountryList'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'
import { useWidowsSize } from '../hooks/width'
import { useTheme } from '../hooks/theme'

const Home = () => {
  // const isdark = useOutletContext()
    const [query, setQuery] = useState('')
    const  [isdark] =  useContext(ThemeContext)
    // const [isdark, setisdark] = useTheme()
    
    const windowSize = useWidowsSize()
    // console.log(windowSize)
  return (
    <>
      <main className={isdark?"dark":""}>
        <Search setQuery={setQuery}/> 
       {/* {query === "unmount"? '': <CountryList query={query}/>}  */}
       {/* <h1 style={{textAlign:'center', color:'red'}}>{windowSize.width} X {windowSize.height}</h1> */}
        <CountryList query={query}/>
      </main> 
    </>
  )
}

export default Home
