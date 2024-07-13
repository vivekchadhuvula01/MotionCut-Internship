import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
          <nav >
              <ul>
                  <li><Link to='/'><img src="../../../public/tazzaTiffins.png" alt="logo" /></Link></li>
                  
                  <li><Link to={'/thali'}>Thali's</Link></li>
                  <li><Link to={'/tiffins'}>Tiffins</Link></li>
                  <li><Link to={'/help'}>Help</Link></li>
              </ul>
             <button><Link to={'/register'}>Register</Link></button>
      </nav>
    </div>
  )
}

export default Navbar
