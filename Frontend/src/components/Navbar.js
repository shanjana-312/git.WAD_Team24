import React, { useState } from 'react';
import { Button2 } from './Button2';
import { Button3 } from './Button3';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [input, setInput] = useState('');
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <i class='fab fa-staylinked' />TARTUP <span>CLUB</span>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-home"></i> Home
            </Link>
                    </li>
                    <li
                        className='nav-item'
                    >
                        <Link
                            to="/about"
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="fas fa-address-card"></i>About
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/products'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="far fa-window-restore"></i> Browse<i className='fas fa-caret-down' />
                        </Link> {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            <i class="fas fa-question"></i>Support
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
            </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Log in
            </Link>
                    </li>
                </ul>
                <div className="searchContainer"><i className="fa fa-search searchIcon"></i>
                    <input className="searchBox" type="search" name="search" placeholder="Search..." /></div>
                <div className="searchbutton"><input type="submit" value="Search" className="searchButton" /></div>
                <div className="btn1"><Button2 /></div>
                <div className="btn1"><Button3 /></div>
            </nav>
        </>
    );
}

export default Navbar;