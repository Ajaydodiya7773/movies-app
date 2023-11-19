import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';


 const Header = ()=> {
  return (
    <div className='header'>
      <div className='headerLeft'>
      <img src={Logo} alt="Logo" />
        
      {/* <Link to="/"><img className='header__icon' src="https://groupda.net/telegram/imgsrc/16760967511669118577.jpg" alt='icon'/></Link> */}
      <Link to="/movies/populer"style={{textDecoration: "none"}}><span>Populer</span></Link>
      <Link to="/movies/top_rated"style={{textDecoration: "none"}}><span>Top Rated</span></Link>
      <Link to="/movies/upcoming"style={{textDecoration: "none"}}><span>Upcoming</span></Link>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <nav className="navbar">
      
      <div className="nav-links">
        
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="user-links">
        <a href="/"><FontAwesomeIcon icon={faSignInAlt} /> Login</a>
        <a href="/"><FontAwesomeIcon icon={faUser} /> Profile</a>
      </div>
    </nav>
      </div>
    
    </div>
  )
}
export default Header