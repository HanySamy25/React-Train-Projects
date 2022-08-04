import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const EditPost = ({
  posts,
  handelEdit,
  editPostTitle,
  setEditPostTitle,
  editPostBody,
  setEditPostBody,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  
  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  }, [post, setEditPostTitle, setEditPostBody]);
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
