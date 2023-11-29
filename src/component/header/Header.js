import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../Logo/logo.png'; 



 const Header = ()=> {
  return (
    <div className='header'>
      <div className='headerLeft'>
      <img src={logo} alt="logo" width="200px" height="200px"/>
        
      <b>
      <Link to="/movies/popular"style={{textDecoration: "none"}}><span><FontAwesomeIcon/>Popular</span></Link>
      <Link to="/movies/top_rated"style={{textDecoration: "none"}}><span><FontAwesomeIcon  />TopRated</span></Link>
      <Link to="/movies/upcoming"style={{textDecoration: "none"}}><span><FontAwesomeIcon  />Upcoming</span></Link>
      </b>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" style="2>Search</button>
      </form>
    <nav className="navbar">
      <div className="user-links">
      <a href="/">About</a>
        <a href="/">Contact</a>
        <select className="custom-dropdown">
      <option value="/"><FontAwesomeIcon icon={faUser} /> Profile</option>
      <option value="/login">Login</option>
      <option value="/signup">SignUp</option>
      </select>
      </div>
    </nav>
      </div>
    
    </div>
  )
}
export default Header