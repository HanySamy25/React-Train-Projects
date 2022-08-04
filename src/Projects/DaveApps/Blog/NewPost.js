import React from 'react'

const NewPost = ({handelSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {
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