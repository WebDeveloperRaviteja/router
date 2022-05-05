import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const user ="john";
  return (
    <div>
      <center>
          <h3>wellcome to home page</h3>
          <Link to={'/Dashboard'}>Dashboard</Link> { }
          <Link to="/About">About</Link>
      </center>
    </div>
  )
}

export default Home
