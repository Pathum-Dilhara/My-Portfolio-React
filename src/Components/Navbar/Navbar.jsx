import React from 'react';
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Portfolio</h1>
            <ul className='nav-menu'>
                <li><AnchorLink class='anchor-link'  href='#home'>Home</AnchorLink></li>
                <li><AnchorLink class='anchor-link' offset={50} href='#education'>Education</AnchorLink></li>
                <li><AnchorLink class='anchor-link' offset={50} href='#tools'>Tools</AnchorLink></li>
                <li><AnchorLink class='anchor-link' offset={50} href='#works'>Portfolio</AnchorLink></li>
                <li><AnchorLink class='anchor-link' offset={50} href='#certification'>Certification</AnchorLink></li>
            </ul>
            <AnchorLink class='anchor-link'  href='#contact'>
                <div className="nav-connect">Contact Me</div>
            </AnchorLink>
            
        </div>
    );
}

export default Navbar;
