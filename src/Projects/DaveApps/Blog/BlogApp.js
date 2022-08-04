import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { format} from 'date-fns';

import "./Blog.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Api from './Api/Posts';
import EditPost from "./EditPost";

const BlogApp = () => {

  const [posts,setPosts]=useState([]);
  const [search,setSearch]=useState('');
  const [searchResults,setSearchResults]=useState([]);
  const [postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody]=useState('');
  const [editPostTitle,setEditPostTitle]=useState('');
  const [editPostBody,setEditPostBody]=useState('');
  const navigate=useNavigate();
useEffect(()=>{
  const fetchPosts=async()=>{
    try {
      const response=await Api.get('/posts');
      setPosts(response.data);
    } catch (error) {
      if (error.response) {
        
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }else{
        console.log(`Error: ${error.message}`);

      }
      }
  }

  fetchPosts();
},[])
  useEffect(()=>{
    const filteredResults = posts.filter(post =>
      ((post.title).toLowerCase()).includes(search.toLowerCase())
      ||
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      
      )
      
      setSearchResults(filteredResults);
      
  },[posts,search]);


  const handelSubmit= async(e)=>{
    e.preventDefault();
    const id = posts.length?posts[posts.length-1].id+1:1;
    const datetime=format(new Date(),'MMMM dd, yyyy pp');
    const newPost ={id,title:postTitle,datetime,body:postBody};
    try {
      const response = await Api.post('/posts',newPost);
      const allPosts =[...posts,response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/dave-apps/blog');
        
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  }

const handelEdit=async(id)=>{
const datetime = format(new Date(),'MMMM dd, yyyy pp');
const updatePost = {id,title:editPostBody,datetime, body:editPostBody}
try {
  const response = await Api.put(`/posts/${id}`,updatePost);
  setPosts(posts.map(post=>post.id===id?{...response.data}:post));
  setEditPostTitle('')
  setEditPostBody('');
  navigate('/dave-apps/blog');
} catch (error) {
  console.log(`Error ${error.message}`);
}


}



  const handelDelete= async(id)=>{
    try {
      await Api.delete(`/posts/${id}`);
      const postsList =posts.filter(post=>post.id!=id);
      setPosts(postsList);
      navigate('/dave-apps/blog');
    } catch (error) {
    console.log(`Error: ${error.message}`);  
    }
    
  } 



  return (
    <div className="blog">
      <Header title="React JS Blog"/>
      <Nav search={search} setSearch={setSearch} />
        <Routes>
        <Route path="/" element={<Home posts={searchResults} />}/>
    
        <Route path="post" element={
                       <NewPost 
                          handelSubmit={handelSubmit}
                          postTitle={postTitle}
                          setPostTitle={setPostTitle}
                          postBody={postBody}     
                          setPostBody={setPostBody}     
                               />}/>
        <Route path="edit-post/:id" element={
                       <EditPost 
                          handelEdit={handelEdit}
                          posts={posts}
                          editPostTitle={editPostTitle}
                          setEditPostTitle={setEditPostTitle}
                          editPostBody={editPostBody}     
                          setEditPostBody={setEditPostBody}     
                               />}/>
    
        <Route path="post/:id" element={<PostPage posts={posts} handelDelete={handelDelete}/>}/>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing/>} />
     
        </Routes>
      <Footer />
     
    </div>
  );
};

export default BlogApp;
