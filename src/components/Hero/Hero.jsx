import React from 'react'
import './Hero.css';
import heroImage from '../../assets/hero_image.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    const handleResumePreview = () => {
        window.open('/resume.pdf', '_blank');
    };

    return (
        <div id='home' className='hero'>
            <img src={heroImage} alt="" />
            <div className="right">
                <h1><span>I'm Rituparna Pradhan</span>, Web developer</h1>
                <p>I am full stack developer.</p>
                <div className='hero-action'>
                    <div className="hero-connect">
                        <AnchorLink className='anchor-link' offset={50} href='#contact'>
                            <p>Contact With Me</p>
                        </AnchorLink>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUpRightDots} />
                        </div>
                    </div>

                    {/* Resume button */}
                    <div 
                        className="hero-resume" 
                        onClick={handleResumePreview}
                    >
                        My Resume
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
