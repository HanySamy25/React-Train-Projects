import React, {useContext} from 'react'
import Feed from './Feed'
import DataContext from './Context/DataContext'

const Home = () => {

  const {searchResults,fetchError, isLoading}=useContext(DataContext);

  return (
    <main className='Blog-Home'>
      {/* {posts.length?(
        <Feed posts={posts}/>
      ):(
        <p style={{ marginTop:"2rem" }}></p>
      )} */}


      {isLoading && <p className='statusMsg'>Loading Posts....</p> }
      {!isLoading && fetchError&& <p className='statusMsg' style={{ color:"red" }}>{fetchError}</p>}
      
      { !isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/>:<p className='statusMsg'>No Posts</p>) }
      
      </main>
  )
}

export default Home