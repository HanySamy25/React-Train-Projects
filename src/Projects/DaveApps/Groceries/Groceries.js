import React, { useEffect, useState } from 'react';
import './Groceries.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import apiRequest from './ApiRequest';



const Groceries = () => {

  const API_URL='http://localhost:3500/items';
  
  // const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppinglist'))||[]);
  const [items,setItems]=useState([]);
  const [newItem,setNewItem]=useState('');
  const [search,setSearch]=useState('');
  const [bgcolor,setBgColor]=useState('');
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    // localStorage.setItem('shoppinglist',JSON.stringify(items));
  
    const fetchItems=async()=>{
      try {
        const response =await fetch(API_URL);
        if(!response.ok) throw Error(`Data Not Recived`);
        const listItems=await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message)
        
        
      }finally{
        setIsLoading(false);
      }
    }

    //simulating request from server delay to fetch data
    setTimeout(() => {
      
      (async()=>fetchItems())()
    }, 2000);

  },[])//end useeffect


  // old way befor using useEffect
  // const setAndSaveItems=(newItems)=>{
  //   setItems(newItems);
  //   localStorage.setItem('shoppinglist',JSON.stringify(items));
  // }


  const addItem=async(item)=>{
    const id =items.length?items[items.length - 1].id + 1 : 1;
    const myNewItem={id,checked:false,item};
    const listItems=[...items,myNewItem];
    
    // setAndSaveItems(listItems);
    setItems(listItems);
    
    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewItem)
    }

    const result=await apiRequest(API_URL,postOptions);
if (result) setFetchError(result);



  }

  const handelCheck = async(id)=>{
    const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item);
    // setAndSaveItems(listItems);
    setItems(listItems);

    const myItem=listItems.filter((item) =>item.id === id);
    const updateOptions={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }

    const reqUrl=`${API_URL}/${id}`;
    const result=await apiRequest(reqUrl,updateOptions);
    if(result)setFetchError(result);
  }
   
  const handelDelete=async (id)=>{
   
  
  
      if (window.confirm('are you sure')) {
        const listItems=items.filter((item)=>item.id !== id);
          // setAndSaveItems(listItems);
          setItems(listItems);
          const deletOptions={method:'DELETE'};
          const reqUrl=`${API_URL}/${id}`;
    const result=await apiRequest(reqUrl,deletOptions);
    if(result)setFetchError(result);

    }else{
      alert('Canceled')
    }
  }

  const handelSubmit=(e)=>{
    e.preventDefault();
    if (!newItem) return ;

    addItem(newItem)
    setNewItem('');
   
  }



  return (
   <div className='dave-app'>
   <Header 
        title="Groceires List" 
        bgcolor={bgcolor}
        setBgColor={setBgColor}
        />
  

   <AddItem
   newItem={newItem}
   setNewItem={setNewItem}
   handelSubmit={handelSubmit}
   />

<SearchItem 
      search={search}
      setSearch={setSearch}
   />
<main>
    {isLoading&& <p>Loading Items...</p>}
    {fetchError && <p style={{ color:"red" }}> {`Error ${fetchError}`}</p>}
   
   {!fetchError && !isLoading && <Content
   items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
  
   handelCheck={handelCheck}
   handelDelete={handelDelete}
   bgcolor={bgcolor}
   setBgColor={setBgColor}
   />}
  
</main>
   <Footer 
   length={items.length}
   bgcolor={bgcolor}
   />
   </div>
  )
}

export default Groceries