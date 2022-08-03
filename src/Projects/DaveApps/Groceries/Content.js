import React from "react";
import ItemList from "./ItemList";



const Content = ({items,handelCheck,handelDelete}) => {


  
  
  return (
      <>
        {items.length?(
        <ItemList 
        items={items}
        handelCheck={handelCheck}
        handelDelete={handelDelete}
       
        />
        ):(
          <p style={{ marginTop:'2rem' }}>Your List Is Empty</p>
        )}
    </>
  )
}

export default Content;
