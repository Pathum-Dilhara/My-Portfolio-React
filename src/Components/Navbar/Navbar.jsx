import React, { useState, useRef } from 'react';
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import close from '../../assets/menu_close.svg';
import open from '../../assets/menu_open.svg'


const Navbar = () => {
    
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }

    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

    return (
        <div className='navbar'>
            <h1>Portfolio</h1>
            <img src={open} onClick={openMenu} className='nav-menu-open' alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <img src={close} onClick={closeMenu} className='nav-menu-close' alt="" />
                <li><AnchorLink class='anchor-link'  href='#home'>Home</AnchorLink></li>
                <li><AnchorLink class='anchor-link'  href='#education'>Education</AnchorLink></li>
                <li><AnchorLink class='anchor-link'  href='#tools'>Tools</AnchorLink></li>
                <li><AnchorLink class='anchor-link'  href='#works'>Works</AnchorLink></li>
                <li><AnchorLink class='anchor-link'  href='#certification'>Certification</AnchorLink></li>
            </ul>
            <AnchorLink class='anchor-link'  href='#contact'>
                <div className="nav-connect">Contact Me</div>
            </AnchorLink>
        </div>
    );
}

export default Navbar;
