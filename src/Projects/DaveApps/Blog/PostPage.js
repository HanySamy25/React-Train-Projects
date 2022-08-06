import React, {useContext}from 'react'
import {useParams,Link,useNavigate} from "react-router-dom";
import Api from './Api/Posts';
import DataContext from './Context/DataContext';

const PostPage = () => {


  const {posts,setPosts}=useContext(DataContext);
  const navigate=useNavigate();
  const {id}=useParams();
const post=posts.find(post=>(post.id).toString()===id);




const handelDelete= async(id)=>{
if (!window.confirm('Are You Sure ?')) return;


  try {
    await Api.delete(`/posts/${id}`);
    const postsList =posts.filter(post=>post.id!==id);
    setPosts(postsList);
    navigate('/dave-apps/blog');
  } catch (error) {
  console.log(`Error: ${error.message}`);  
  }
  
} 

  return (
    <main className='Blog-PostPage'>
      <article className='Blog-post'>
        {post&&
        <>
        <h2>{post.title}</h2>
        <p className='Blog-postDate'>{post.dattime}</p>
        <p className='Blog-postBody'>{post.body}</p>
        <Link to={`/dave-apps/blog/edit-post/${post.id}`}>
          <button className='Blog-editButton'>Edit</button>
          </Link>
        <button className='Blog-deleteButton' onClick={()=>handelDelete(post.id)}>
          Delete Post
        </button>
        
        
        </>
        }
        {!post && 
        <div className='Blog-Missing'>
        <h2>Post Not Found</h2>
        <p>
          <Link to='/dave-apps/blog'>go to home</Link>
        </p>
        </div>
        }
      </article>
    </main>
  )
}

export default PostPage