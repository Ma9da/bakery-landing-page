import React from 'react'
import './about.css'
import about1 from "../../assets/images/about1.jpeg"
function About() {
    return (
        <section class="about paddingY">
            <div class="container flexContainer">
                <figure class="aboutImg">
                    <img src={about1} alt="fresh baked bread"/>
                </figure>
                <header class="aboutHeader">
                    <h2 class="title">Who We Are?</h2>
                    <p class="titleDesc">
                        We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on
                        projects big and small from small residential extensions to full house. We are so happy with this theme.
                        Everyday it make our lives better.
                    </p>
                    <ul class="aboutList">
                        <li>
                            <i class="icon fa-solid fa-check"></i>
                            we care about environment.
                        </li>
                        <li>
                            <i class="icon fa-solid fa-users"></i>
                            we are trusted by hundreds of clients.
                        </li>
                        <li>
                            <i class="icon fa-solid fa-heart"></i>
                            social media loves us!
                        </li>
                        <li>
                            <i class="icon fa-solid fa-check"></i>
                            this list is super easy to create.
                        </li>
                    </ul>
                </header>
            </div>
        </section>
    )
}

export default About