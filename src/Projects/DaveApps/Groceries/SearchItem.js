import React from 'react'
import style from './Groceries.module.css';

const SearchItem = ({search,setSearch}) => {
  return (

    <form className={style.searchForm}  onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
        type="text" 
        id='search'
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
    
  )
}

export default SearchItem