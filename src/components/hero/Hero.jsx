import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import "./hero.css"
function Hero() {
    return (
        <section className="hero paddingY">
            <div className="conatiner flexContainer">
                <header className="heroHeader">
                    <p>Welcome to</p>
                    <h1>Family Bakery</h1>
                    <p>
                        We're the biggest, best equipped and most advanced Bakery in the greater Los Angeles area.
                    </p>
                </header>
                <div className="setting">
                <FontAwesomeIcon icon={faGears} />
                <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div className="heroAction">
                    <button className="btn active">learn more</button>
                    <button className="btn disabled">contact us</button>
                </div>
                <button className="scroll">
                <a href="#about"></a>
                </button>
            </div>
        </section>
    )
}

export default Hero