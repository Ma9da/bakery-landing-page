import React from 'react'
import "./navbar.css"
import logo from '../../assets/images/logo.png'
function Navbar() {
    return (
        <header>
        <nav class="navbar">
            <div class="container flexContainer">
                <header class="navHeader">
                    <button class="navToggle">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <a href="/" class="navLogo">
                        <img class="logoImg" src={logo} alt="bakery logo"/>
                    </a>
                </header>
                <ul class="navLinks">
                    <li class="navLink">
                        <a href="#home">home</a>
                    </li>
                    <li class="navLink">
                        <a href="#about">about</a>
                    </li>
                    <li class="navLink">
                        <a href="#offers">our offers</a>
                    </li>
                    <li class="navLink">
                        <a href="#gallery">gallery</a>
                    </li>
                    <li class="navLink">
                        <a href="#blog">blog</a>
                    </li>
                    <li class="navLink">
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Navbar