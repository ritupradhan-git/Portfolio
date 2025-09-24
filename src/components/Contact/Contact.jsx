import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    const email="rituppradhan2004@gmail.com";
    const linkedinURL="https://www.linkedin.com/in/rituparna-pradhan-6b67b821a";
    const githubURL="https://github.com/ritupradhan-git"
  return (
    <div id='contact' className='contact-container'>
        <h1>Contact Me</h1>
        <p>Feel free to reach out via any platforms below:</p>
        <div className="contact-cards">
            {/* LinkedIn*/}
            <a href={linkedinURL} target='_blank' rel='noopener noreferrer' className='contact-card'>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                <h3>LinkedIn</h3>
                <p>Connect with me professionally</p>
            </a>
            {/* GitHub Card */}
            <a href={githubURL} target='_blank' rel='noopener noreferrer' className='contact-card'>
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <h3>GitHub</h3>
                <p>Checkout my projects</p>
            </a>
            {/* Email Card */}
            <a href={`mailto:${email}`} className='contact-card'>
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                <h3>Email</h3>
                <p>{email}</p>
                <p>Send me a message</p>
            </a>
        </div>      
    </div>
  )
}

export default Contact
