import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
   <div className='nav'>
     
      <nav
        
      >
        <Link to="/">Provide product Details</Link> |{" "}
        <Link to="/page_2">product display</Link>
      </nav>
    </div>
    </>
   
  )
}

export default Nav
