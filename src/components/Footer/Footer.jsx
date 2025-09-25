import React from 'react'
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    return (
        <div className="footer-container">
            <div className="top">
                <h1>Rituparna Pradhan</h1>
            </div>
            <div className="bottom">
                &copy; 2024 Rituparna Pradhan. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
