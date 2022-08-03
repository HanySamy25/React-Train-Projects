import React from 'react';
import { FaTrashAlt } from "react-icons/fa";


const LineItem = ({ item, handelCheck, handelDelete }) => {
  return (
    <li className="item">
    <input
      type="checkbox"
      checked={item.checked}
      onChange={() => handelCheck(item.id)}
    />
    <label
      onDoubleClick={() => handelCheck(item.id)}
      style={item.checked ? { textDecoration: "line-through" } : null}
    >
      {item.item}
    </label>

    <FaTrashAlt
      onClick={() => handelDelete(item.id)}
      role="buttone"
      tabIndex="0"
      
      aria-label={`Delete ${item.item}`}
    />
  </li>
  )
}

export default LineItem