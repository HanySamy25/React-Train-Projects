import React from 'react'
import style from './Groceries.module.css';

const Footer = ({length,bgcolor}) => {
   const today=new Date();
  return (
    <footer style={{backgroundColor:bgcolor}} className={style.footer}>
       
        <p>
          {length} List {length ===1 ?"item":"items"}
            
        </p>

        <small>
        <sub>Copyright &copy; {today.getFullYear()}</sub>

        </small>
    </footer>
  )
}

export default Footer