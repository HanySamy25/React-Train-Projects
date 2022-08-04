import React from 'react'
import Feed from './Feed'

const Home = ({posts,fetchError,isLoading}) => {
  return (
    <main className='Blog-Home'>
      {/* {posts.length?(
        <Feed posts={posts}/>
      ):(
        <p style={{ marginTop:"2rem" }}></p>
      )} */}


      {isLoading && <p className='statusMsg'>Loading Posts....</p> }
      {!isLoading && fetchError&& <p className='statusMsg' style={{ color:"red" }}>{fetchError}</p>}
      
      { !isLoading && !fetchError && (posts.length ? <Feed posts={posts}/>:<p className='statusMsg'>No Posts</p>) }
      
      </main>
  )
}

export default Home