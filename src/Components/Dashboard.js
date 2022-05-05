import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <center>
         <h3> Dashboard </h3> 
      
      <Link to="/ ">Home</Link> {     }
      <Link to="/About">About</Link>
      </center>
    </div>
  )
}

export default Dashboard
