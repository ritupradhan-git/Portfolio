import React from 'react'
import './About.css';
import nodejs from '../../assets/Nodejs.svg';
import mongodb from '../../assets/MongoDB.svg';
import reactjs from '../../assets/React.svg';
import python from '../../assets/Python.svg';
import cpp from '../../assets/C++.svg';
import java from '../../assets/Java.svg';
import javascript from '../../assets/JavaScript.svg';
import figma from '../../assets/Figma.svg';
import git from '../../assets/Git.svg';
const About = () => {
  const skills = [
    { name: "React.js", logo: reactjs },
    { name: "Node.js", logo: nodejs },
    { name: "MongoDB", logo: mongodb },
    { name: "JavaScript", logo: javascript },
    { name: "Java", logo: java },
    { name: "C++", logo: cpp },
    { name: "Python", logo: python },
    { name: "Git", logo: git },
    { name: "Figma", logo: figma }
  ];
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1><span>About </span> Me !</h1>
      </div>
      <div className="about-section">
        <div className="about-top">
          <div className="about-para">
            <p>In the Journey of being <span>Full Stack Developer</span> , building scalable and user-friendly solutions</p>
            <p className='p2'>Turning <span>ideas</span> to <span>solutions</span> </p>
          </div>
          <div className="about-skills">
            {skills.map((skill,index) => (
              <div className="about-skill" key={index}>
                  <img src={skill.logo} alt={skill.name} className="skill-logo"/>
                  <p>{skill.name}</p>
              </div>
            ))}
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
