import React from 'react'

const Row = ({item}) => {
    
  return (
    <tr>
        {Object.entries(item).map(([key,value])=>{
        return(
            <td key={key}>{JSON.stringify(value)}</td>
        )}
        )}
    </tr>
  )
}

export default Row