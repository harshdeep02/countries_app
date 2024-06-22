import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/themeContext'
import { useTheme } from '../hooks/theme'

const Header = ({theme}) => {
// const [isdark, setisdark] = theme
const  [isdark, setisdark] =  useContext(ThemeContext)
// const [isdark, setisdark] = useTheme()

  return (
    <>
    <div className="header">
      <header className={`header-container ${isdark?"dark":""}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p onClick={()=>{
          setisdark(!isdark)
          localStorage.setItem('isdark', !isdark)
        }  }>
          <i className={`fa-solid fa-${isdark?"sun":"moon"}`}></i>&nbsp;&nbsp;{isdark?"Light":"Dark"} Mode
          </p>
      </div>
    </header>
    </div>
    </>
  )
}

export default Header
