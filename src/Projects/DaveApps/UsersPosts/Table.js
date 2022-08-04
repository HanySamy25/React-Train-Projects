import React from 'react'
import Row from './Row'
import style from '../Groceries/Groceries.module.css';

const Table = ({items}) => {
  return (
    <div className={style.table_container}>
        <table>
            <tbody>
                {items.map(item=>(
                    <Row key={item.id} item={item}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table