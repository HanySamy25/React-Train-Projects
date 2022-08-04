import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <div className='Blog-Missing'>
        <h2>Page Not Found</h2>
        <p>
          <Link to='/dave-apps/blog'>go to home</Link>
        </p>


    </div>
  )
}

export default Missing