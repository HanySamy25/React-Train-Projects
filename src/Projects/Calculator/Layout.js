
import React, { useState } from 'react';
import './Layout.css';
import Output from './Output';
import logo from './assets/img/logo.png';
const Layout = (props) => {
let [input,setInput]=useState('0');
let [result,setResult]=useState('');

  const handelClick=(e)=>{
    const value= e.target.value;
    if (value === '=') {
        if (value !== '') {
          let res='';
          try {
            res = Function(`return ${input}`)()
            console.log(res);
          } catch (error) {
            setResult('Math erro')
          }
          if (res === undefined) {
            setResult('Math error')
          }else{
            setResult(input + '=')
            setInput(()=>res)
          }
        }
    }else if(value === 'C'){
      setInput('0');
      setResult('')
    }else if(value === 'DEL'){
      let str =   input;
      str=str.substr(0,str.length-1);
       setInput(str);
      
    }else if(input==='0'){
      setInput(value);
    }else{
      setInput((input +=value))
    }
  }
  return (
    <div className='alert alert-warning frams'>
     
     <div className='calculator'>
      <br></br>
      <Output user={input} answer={result}/>
      <img alt="logo" className='logo' src={logo}/>
      <div className='keys'>
        <input type='button' value={'C'} className='button clear' onClick={handelClick}></input>
        <input type='button' value={'DEL'} className='button clear' onClick={handelClick}></input>
        <input type='button' value={'%'} className='button operator' onClick={handelClick}></input>
        <input type='button' value={'/'} className='button operator' onClick={handelClick}></input>
        
        <input type='button' value={'7'} className='button' onClick={handelClick}></input>
        <input type='button' value={'8'} className='button' onClick={handelClick}></input>
        <input type='button' value={'9'} className='button' onClick={handelClick}></input>
        <input type='button' value={'*'} className='button operator' onClick={handelClick}></input>

        <input type='button' value={'4'} className='button' onClick={handelClick}></input>
        <input type='button' value={'5'} className='button' onClick={handelClick}></input>
        <input type='button' value={'6'} className='button' onClick={handelClick}></input>
        <input type='button' value={'-'} className='button operator' onClick={handelClick}></input>
        
        <input type='button' value={'1'} className='button' onClick={handelClick}></input>
        <input type='button' value={'2'} className='button' onClick={handelClick}></input>
        <input type='button' value={'3'} className='button' onClick={handelClick}></input>
        <input type='button' value={'+'} className='button operator' onClick={handelClick}></input>
        
        <input type='button' value={'0'} className='button' onClick={handelClick}></input>
        <input type='button' value={'.'} className='button' onClick={handelClick}></input>
        <input type='button' value={'='} className='button operator' onClick={handelClick}></input>
      </div>
     </div>
    </div>
  )
}

export default Layout