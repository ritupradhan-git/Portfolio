import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="Logo" />
        <ul className='nav-menu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='nav-connect'>Connect with Me</div>
    </div>
  )
}

export default Navbar
