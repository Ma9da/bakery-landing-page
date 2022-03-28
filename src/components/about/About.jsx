import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.css'
import about1 from "../../assets/images/about1.jpeg"
import { faCheck, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
function About() {
    return (
        <section class="about paddingY">
            <div class="container flexContainer">
                <figure class="aboutImg">
                    <img src={about1} alt="fresh baked bread" />
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
                            <FontAwesomeIcon className='icon' icon={faCheck} />
                            we care about environment.
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faUsers} />
                            we are trusted by hundreds of clients.
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faHeart} />
                            social media loves us!
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faCheck} />
                            this list is super easy to create.
                        </li>
                    </ul>
                </header>
            </div>
        </section>
    )
}

export default About