import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const SoloCountryDetail = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const urlAfterSlash = pathname.split('/').slice(1).join('/');

  console.log(urlAfterSlash)

  useEffect(()=>{

      fetch(`https://restcountries.com/v3.1/name/${urlAfterSlash}?fullText=true`)
      .then((res)=> res.json())
      .then(([data])=>{
          console.log(data)
        //   updateCountryDetails(data)   
          
      })
      // .catch((err)=>{
      //   console.log(err)
      //   setNotFind(true)
      // })  
  },[])
  

  return (
    <div>SoloCountryDetail</div>
  )
}
