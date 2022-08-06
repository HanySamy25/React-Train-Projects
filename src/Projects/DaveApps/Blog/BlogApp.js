import React from "react";
import { Routes, Route } from "react-router-dom";

import "./Blog.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";


import { DataProvider } from "./Context/DataContext";

const BlogApp = () => {

  
 


// useEffect(()=>{
//   const fetchPosts=async()=>{
//     try {
//       const response=await Api.get('/posts');
//       setPosts(response.data);
//     } catch (error) {
//       if (error.response) {
        
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//       }else{
//         console.log(`Error: ${error.message}`);

//       }
//       }
//   }

//   fetchPosts();
// },[]);












  return (
    <div className="blog">
      <Header title="React JS Blog"/>
<DataProvider>
      <Nav />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="post" element={<NewPost/>} />
        <Route path="edit-post/:id" element={<EditPost />}/>
        <Route path="post/:id" element={<PostPage/>}/>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing/>} />
     
        </Routes>
      </DataProvider>     
      <Footer />
    </div>
  );
};

export default BlogApp;
