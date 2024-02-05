import React from 'react'

const SearchTask = (props) => {
  return (
    <form className='searchForm' onSubmit={(e) => {e.preventDefault()}}>
        <label htmlFor="search">Search</label>
        <input type="search" id="search" placeholder='Search Task' value={props.searchItem} onChange={(e) => props.setsearchItem(e.target.value)}/>
    </form>
  )
}

export default SearchTask