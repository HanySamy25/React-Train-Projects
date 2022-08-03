import React from 'react'

const Buttons = ({btnText,reqType,setReqType}) => {

    const style={
            width:"30%",
            color:"Darkgreen",
            marginRight:"5px"
      };
  return (
    <>
    
    <button
    style={style}
    className={btnText===reqType?"selected":null}
    type="button"
    onClick={()=>setReqType(btnText)}

    >{btnText} </button>
   
    </>
  )
}

export default Buttons