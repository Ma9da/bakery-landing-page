import React from 'react'
import "./navbar.css"
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    return (
        <header>
        <nav className="navbar">
            <div className="container flexContainer">
                <header className="navHeader">
                    <button className="navToggle">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <a href="/" className="navLogo">
                        <img className="logoImg" src={logo} alt="bakery logo"/>
                    </a>
                </header>
                <ul className="navLinks">
                    <li className="navLink">
                        <a href="#home">home</a>
                    </li>
                    <li className="navLink">
                        <a href="#about">about</a>
                    </li>
                    <li className="navLink">
                        <a href="#offers">our offers</a>
                    </li>
                    <li className="navLink">
                        <a href="#gallery">gallery</a>
                    </li>
                    <li className="navLink">
                        <a href="#blog">blog</a>
                    </li>
                    <li className="navLink">
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Navbar