import React, {useState, useEffect,useContext } from "react";
import { useParams, Link ,useNavigate} from "react-router-dom";
import { format} from 'date-fns';
import Api from './Api/Posts';
import DataContext from './Context/DataContext';

const EditPost = () => {


  const [editPostTitle,setEditPostTitle]=useState('');
  const [editPostBody,setEditPostBody]=useState('');
  const {posts,setPosts}=useContext(DataContext);
  const navigate=useNavigate();

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  
  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  }, [post, setEditPostTitle, setEditPostBody]);



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


  return (
    <main className="Blog-NewPost">
      {editPostTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="Blog-newPostForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="postTitle">Title</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editPostTitle}
              onChange={(e) => setEditPostTitle(e.target.value)}
            />

            <label htmlFor="postBody">Post :</label>
            <input
              type="text"
              id="postBody"
              required
              value={editPostBody}
              onChange={(e) => setEditPostBody(e.target.value)}
            />
            <button type="submit" onClick={()=>handelEdit(post.id)}>Submit</button>
          </form>
        </>
      )}
      {
        !editPostTitle&&
        <>
        <h2>Post Not Found</h2>
        <p>
            <Link to='/dave-apps/blog'>go to home</Link>
        </p>
        </>
      }
    </main>
  );
};

export default EditPost;
