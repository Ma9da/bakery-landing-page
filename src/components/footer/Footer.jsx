import React from 'react'
import "./footer.css"
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faEnvelope, faGlobe, faLocationPin, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <footer>
            <section class="footerLinks paddingY container">
                <div class="aboutFooter">
                    <h4 class="footerTitle">About Us</h4>
                    <p class="footerText">
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I
                        am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <p class="footerText">
                        We are the champions! We are the most amazing theme of all time, yeah.
                    </p>
                </div>
                <div class="special">
                    <h4 class="footerTitle">Why We Are Special?</h4>
                    <ul>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Our magical recipe.</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />We care about environment.</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />We are trusted by hundreds of clients.
                        </li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Social media loves us!</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />This list is super easy to create.</li>
                    </ul>
                </div>
                <div class="hours">
                    <h4 class="footerTitle">Opening Hours</h4>
                    <ul>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Monday 10AM - 9PM</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Tuesday 10AM - 9PM</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Wednesday 10AM - 9PM</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Thursday 10AM - 10PM</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Friday 10AM - 10PM</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faAngleRight} />Weekends 10AM - 11PM</li>
                    </ul>
                </div>
                <div class="details">
                    <h4 class="footerTitle">Contact Details</h4>
                    <ul>
                        <li class="footerLi"><FontAwesomeIcon icon={faLocationPin} />Manchester Road 123-78B, Silictown
                            7854MD, Great Country</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faPhoneFlip} />+46 123 456 789</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faEnvelope} />Friday 10AM - 10PM Weekends 10AM - 11PM
                            Contact Details Manchester Road 123-78B, Silictown 7854MD, Great Country +46 123 456 789
                            hello@sitename.com</li>
                        <li class="footerLi"><FontAwesomeIcon icon={faGlobe} />http://www.sitename.com</li>
                    </ul>
                </div>
            </section>
            <section class="copywrite">
                <img src={logo} alt="logo" />
                <p>Copyright 2017. All rights reserved.
                </p>
                <ul>
                    <li class="socialIcon" id="facebook"><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li class="socialIcon" id="google"><FontAwesomeIcon icon={faGooglePlusG} /></li>
                    <li class="socialIcon" id="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></li>
                    <li class="socialIcon" id="twitter"><FontAwesomeIcon icon={faTwitter} /></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer