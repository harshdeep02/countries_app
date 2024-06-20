import React from 'react'

const Search = ({setQuery}) => {

  return (
    <>
      <div className="search-filter-container">
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" onChange={(e)=> setQuery(e.target.value)}
            placeholder="Search for a country..." fdprocessedid="7iaej" />
        </div>
        <select className="filter-by-region" fdprocessedid="dszws"  onChange={(e)=>setQuery(e.target.value)}>
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  )
}

export default Search
