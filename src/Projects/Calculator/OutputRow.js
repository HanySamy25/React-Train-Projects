import React from 'react';
import './OutputRow.css';

export const OutputRow = (props) => {
  return (
    <div>
      <input type='text' readOnly className='screen' style={props.fontSize} value={props.value}/>
    </div>
  )
}

export default OutputRow;
