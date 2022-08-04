import React from 'react'
import style from './Groceries.module.css';
const Header = ({title , bgcolor,setBgColor}) => {
  return (
    <header style={{ backgroundColor:bgcolor }} className={style.header}>
        <h1>{title}</h1>
        <input 
        className={style.bgcolor}
        type="text"
        id='bgcolor'
        placeholder='type your color'
        value={bgcolor}
        onChange={(e)=>setBgColor(e.target.value)}
        />
    </header>
  )
}

Header.defaultProps={
  title:"Default Title"
}
export default Header