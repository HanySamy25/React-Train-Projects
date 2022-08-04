import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Groceries from './Groceries/Groceries';
import UsersPosts from "./UsersPosts/UsersPosts";
import BlogApp from './Blog/BlogApp';


const Apps = () => {
  return(
  <>
  <Routes>
    <Route path='groceries' element={<Groceries/>}/>
    <Route path='users-posts' element={<UsersPosts/>}/>
    <Route path='blog/*' element={<BlogApp/>}/>
  </Routes>
  
  </>
  )
}

export default Apps