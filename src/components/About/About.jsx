import React from 'react'
import './About.css';
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1><span>About </span> Me !</h1>
        {/* <img src={} alt="" /> */}
      </div>
      <div className="about-section">
        <div className="aboutleft">
            {/* <img src={} alt="" /> */}
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus porro voluptates necessitatibus eligendi earum, voluptas vitae sapiente corporis repellendus nobis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ex!</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"50%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
      </div>
    </div>
  )
}

export default About
