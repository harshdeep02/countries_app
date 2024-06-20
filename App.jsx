import React, {useContext, useState}from 'react'
import Header from './components/Header.jsx'
import './style.css'
import { Outlet } from 'react-router-dom'
import { Themeprovider} from './context/themeContext.jsx'

const App = () => {
  // const[isdark, setisdark] = useState(JSON.parse(localStorage.getItem('isdark')))

  return (
    // <themeContext.Provider value={[isdark, setisdark]}>
    //   <Header/>
    //   <Outlet context={isdark}/>
    // </themeContext.Provider>

    <Themeprovider>
       <Header/>
       <Outlet/>
    </Themeprovider>
  )
}

export default App
