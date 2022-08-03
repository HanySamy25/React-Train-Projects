import React from 'react'

const Header = ({title , bgcolor,setBgColor}) => {
  return (
    <header style={{ backgroundColor:bgcolor }}>
        <h1>{title}</h1>
        <input 
        className='bgcolor'
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