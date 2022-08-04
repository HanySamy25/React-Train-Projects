import React from 'react'
import {useParams,Link} from "react-router-dom";


const PostPage = ({posts,handelDelete}) => {


  const {id}=useParams();
const post=posts.find(post=>(post.id).toString()===id);

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