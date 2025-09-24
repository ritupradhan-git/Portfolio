import React from 'react'
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const email = "rituppradhan2004@gmail.com";
    const linkedinURL = "https://www.linkedin.com/in/rituparna-pradhan-6b67b821a";
    const githubURL = "https://github.com/ritupradhan-git"
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am Rituparna Pradhan</p>
                </div>
                <div className="footer-top-right"><h1>Contact Me</h1>
                    <div className="footer-cards">

                        {/* LinkedIn*/}
                        <a href={linkedinURL} target='_blank' rel='noopener noreferrer' className='card'>
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            <h3>LinkedIn</h3>
                        </a>
                        {/* GitHub Card */}
                        <a href={githubURL} target='_blank' rel='noopener noreferrer' className='card'>
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                            <h3>GitHub</h3>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">&copy; 2023 Rituparna Pradhan. All Rights reserved.</div>
                <div className="footer-bottom-right">
                    <a href="#contact">Connect with me</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
