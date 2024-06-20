import React, { useEffect, useState } from 'react'
// import {countryData} from '../countryData.js'
import Card from './Card'
import spinner from './spinner.gif'
import { CountryListShimmer } from './countryListShimmer'


const CountryList = ({query}) => {

  const [countryData, setCountryData] = useState([])


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      // conso  le.log(data)
      setCountryData(data)
    }).catch((err)=>console.log(err))

    // return (()=>{
    //   console.log("clean")  // 3. use effect also run when componenet is unmount
    //  })

  }, []) // 1. use effect hook use depedencies in this array, use empty array if we one run this function in one time and useEffect always run in firsttime

  const [count, setCount] = useState(0)

  useEffect(() => {
  //  console.log("hii")
  
  }, [count, query]) // 2. use effect hook moniter the state also, if the state is changed the function will be run and we can also add on rmore state in this array



  const searchResult = countryData.filter((country)=>{
      return country.name.common.toLowerCase().includes(query.toLowerCase())  ||  country.region.toLowerCase().includes(query.toLowerCase())
  })
  


  const countryArray = countryData.map((country)=>{
    return <Card key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population} region={country.region} capital={country.capital?.[0]}/>
    
})

  return (
    // 1. we can use an variable here or direct use the function like as shown below
    // <>
    // <div className="countries-container">
    //     {countryArray}  // we can use an variable here or direct use the function like as shown below
    // </div>
    // </>

    // 2.  we can use direct use the function
    // <>
    //   <div className="countries-container">
    //      {countryData.map((country)=>{
    //     return <Card key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population} region={country.region} capital={country.capital?.[0]}/>
    
    //   })} 
    // </div>
    // </>


    // 3.   we can use an variable here with search functionality

    <>
    {/* <button onClick={()=> setCount(count+1)}>count</button> <p>{count}</p> */}

    {/* {countryData.length === 0 ? <div className="spinner"><img src={spinner} alt="" /></div> : */}

    {countryData.length === 0 ?<CountryListShimmer/> :
     <div className="countries-container">
         {searchResult.map((country)=>{   // "searchResult" is an filter array result 
         return <Card key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population} region={country.region} capital={country.capital?.[0]} data={country}/>
    
       })} 
     </div>}
    
    </>
  )
}

export default CountryList
