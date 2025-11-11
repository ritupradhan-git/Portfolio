import React, { useState, useEffect } from 'react'
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.svg';
import menu_icon from '../../assets/menu_open.svg'
import close_icon from '../../assets/menu_close.svg'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// const Navbar = () => {
//     const [menu, setMenu] = useState('home');
//     const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="navbar">
//         <img src={logo} alt="Logo" />

//         <ul className='nav-menu'>

//             <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Work</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
//         </ul>
//         <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact With Me</p></AnchorLink></div>
//     </div>
//   )
// }

// export default Navbar
const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [blur, setBlur] = useState(false); // new state for blur

    // scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setBlur(window.scrollY > 50); // add blur if scrolled more than 50px
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleMenuClick=(section)=>{
        setMenu(section);
        setMenuOpen(false); //hide mobile menu on click
    }
    return (
        <div className={`navbar ${blur ? 'blur' : ''}`}>
            <img src={logo} alt="Logo" />
            {/* Hamburger Menu for Mobile */}
            <img
                src={menuOpen? close_icon : menu_icon}
                alt="Menu"
                className='hamburger'
                onClick={()=> setMenuOpen(!menuOpen)}
            />

            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <li>
                    <AnchorLink className="anchor-link" href='#home'>
                        <p onClick={() => handleMenuClick("home")}>Home</p>
                    </AnchorLink>
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#about'>
                        <p onClick={() => handleMenuClick("about")}>About</p>
                    </AnchorLink>
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#work'>
                        <p onClick={() => handleMenuClick("work")}>Work</p>
                    </AnchorLink>
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#contact'>
                        <p onClick={() => handleMenuClick("contact")}>Contact</p>
                    </AnchorLink>
                </li>
            </ul>

            {/* <div className='nav-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    <p onClick={() => setMenu("contact")}>Contact With Me</p>
                    <div className='arrow'>
                        <FontAwesomeIcon icon={faArrowUpRightDots} />
                    </div>
                </AnchorLink>
            </div> */}
        </div>
    );
};

export default Navbar;