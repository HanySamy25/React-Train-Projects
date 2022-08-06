import React ,{useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { format} from 'date-fns';
import Api from './Api/Posts';
import DataContext from './Context/DataContext';






const NewPost = () => {
  

  const [postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody]=useState('');
  const {posts,setPosts}=useContext(DataContext);
  const navigate=useNavigate();
  
  
  
  
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


  return (
    <main className='Blog-NewPost'>
      <h2>New Post</h2>
      <form className='Blog-newPostForm'  onSubmit={handelSubmit}>
    <label htmlFor="postTitle">Title</label>
    <input 
      type="text"
      id='postTitle'
      required
      value={postTitle}
      onChange={(e)=>setPostTitle(e.target.value)}
    />

<label htmlFor="postBody">Post:</label>
    <input 
      type="text"
      id='postBody'
      required
      value={postBody}
      onChange={(e)=>setPostBody(e.target.value)}
    />
    <button type='submit'>Submit</button>
      </form>
      </main>
  )
}

export default NewPost