import React from 'react'
import '../pages/Styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar1">
        <ul className="nav-list">
        <Link style={{textDecoration: 'none'}}to='/'><li className="nav-item">Home</li> </Link>
        <Link style={{textDecoration: 'none'}}to='About'> <li className="nav-item">About Honey</li></Link>
        <Link style={{textDecoration: 'none'}}to='Contact'> <li className="nav-item">Contact</li></Link>
        </ul>
      </nav>

      <nav className="navbar2">
        <ul className='nav-list2'>
          <Link style={{textDecoration:'none'}} to='SipVibes'><li className='nav-item'>Sip & Vibes</li></Link>
          <Link style={{textDecoration:'none'}} to='ArtofLiving'><li className='nav-item'>The Art Of Living</li></Link>
          <Link style={{textDecoration:'none'}} to='LoveLanguage'><li className='nav-item'>Love Language</li></Link>
          <Link style={{textDecoration:'none'}} to='GoodReads'><li className='nav-item'>Good Reads</li></Link>
        </ul>
    </nav>
  </>
  )
}

export default Navbar