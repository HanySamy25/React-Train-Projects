import React from "react";
import LineItem from "./LineItem";
import style from './Groceries.module.css';

const ItemList = ({ items, handelCheck, handelDelete }) => {
  return (
    <ul className={style.ul}>
      {items.map((item) => (
       <LineItem 
       key={item.id}
       item={item}
       handelCheck={handelCheck}
       handelDelete={handelDelete}
       
       />
      ))}
    </ul>
  );
};

export default ItemList;
