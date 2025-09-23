import React from 'react'
import './Hero.css';
import heroImage from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={heroImage} alt="" />
      <h1><span>I'm Rituparna Pradhan</span>, Web developer</h1>
      <p> I am full stack developer.</p>
      <div className='hero-action'>
        <div className="hero-connect">Connect Wtih Me</div>
        <div className="hero-resume">My resume</div>
      </div>

    </div>
  )
}

export default Hero
