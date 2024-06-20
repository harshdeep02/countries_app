import React, { useContext, useEffect, useState } from 'react'
import './countryStyle.css'
import spinner from './spinner.gif'
import { Link, useLocation, useOutlet, useOutletContext, useParams } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'
import { useTheme } from '../hooks/theme'
import CountryDetailShimmer from './CountryDetailShimmer'

const CounteryDetail = () => {

    const prams = useParams()
    const countryName = prams.country
    const [countryData, SetCountryData] = useState(null)
    const [notFind, setNotFind] = useState(false)
    const {state} = useLocation()
    // const isdark = useOutletContext() 
    // const  [isdark] =  useContext(ThemeContext)
    const [isdark, setisdark] = useTheme()


    function updateCountryDetails(data){
      SetCountryData({
        name:data.name.common,
        native:Object.values(data.name.nativeName ||  {})[0]?.common,
        region:data.region,
        subRegion:data.subregion,
        population:data.population,
        capital:Object.values(data.capital ||  {})?.join(', '),
        tld:data.tld[0],
        currencies:Object.values(data.currencies||  {})[0]?.name,
        languages:Object.values(data.languages ||  {})?.join(', '),
        flag:data.flags.svg,
        borders:[]
        })

        if(!data.borders){
          data.borders = []
        }

      Promise.all(data.borders.map((border)=>{
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([border]) => {
                return border.name.common
                // SetCountryData((prevState)=>({...prevState, borders:[...prevState.borders, border.name.common]}))
              })

          })).then((borders)=>{
            setTimeout(() => {
              SetCountryData((prevState)=>({...prevState, borders}))
            },1000);
            
          })
    }



    useEffect(()=>{

      if(state){
        updateCountryDetails(state)
        return
      }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res)=> res.json())
        .then(([data])=>{
            console.log(data)
            updateCountryDetails(data)   
            
        })
        // .catch((err)=>{
        //   console.log(err)
        //   setNotFind(true)
        // })  
    },[countryName])


    const goBack = (e)=>{
      e.stopPropagation();
      history.back(1)
    }
    
    if(notFind){
      return <>
      <div className="country-details-container">
        <span className="back-button" onClick={goBack}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        </div>
      <h1 className='err'>Country not found</h1>
    </> 
    }

  return (
    <>
    {/* {countryData === null ? <div className="spinner"><img src={spinner} alt="" /></div> : */}

    {countryData === null ? <CountryDetailShimmer/> :
     <main className={isdark?"dark":""}>
      <div className="country-details-container">
        <span className="back-button" onClick={goBack}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={countryData.name} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>   
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.native}</span></p>
              <p><b>Population: </b><span className="population">{countryData.population.toLocaleString('en-IN')}</span></p>
              <p><b>Region: </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
              <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
            </div>
            {countryData.borders.length !==0 && <div className="border-countries"><b>Border Countries: </b>&nbsp; {countryData.borders.map((border,i)=>{
               return( <Link to={`/${border}`} key={border}>{border}</Link>) })}</div>}
          </div>
          
        </div>
      </div>
    </main>
    }
     
    </>
  )
}

export default CounteryDetail
