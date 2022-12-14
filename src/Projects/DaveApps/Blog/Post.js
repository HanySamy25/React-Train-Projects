import React from 'react'
import { Link } from 'react-router-dom'
const Post = ({post}) => {
  return (
    <article className='Blog-post'>
        <Link to={`/dave-apps/blog/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p className='Blog-postDate'>{post.datetime}</p>
        </Link>
        <p className='Blog-postBody'>
            {(post.body).length <=25
            ?post.body
            :`${(post.body).slice(0,25)}...`
            }
        </p>
        </article>
  )
}

export default Post