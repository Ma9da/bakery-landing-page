import React from 'react'

function Hero() {
    return (
        <section class="hero paddingY">
            <div class="conatiner flexContainer">
                <header class="heroHeader">
                    <p>Welcome to</p>
                    <h1>Family Bakery</h1>
                    <p>
                        We're the biggest, best equipped and most advanced Bakery in the greater Los Angeles area.
                    </p>
                </header>
                <div class="setting">
                    <i class="fa-solid fa-gears"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="heroAction">
                    <button class="btn active">learn more</button>
                    <button class="btn disabled">contact us</button>
                </div>
                <button class="scroll">
                    
                </button>
            </div>
        </section>
    )
}

export default Hero