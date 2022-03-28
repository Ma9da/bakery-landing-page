import React from 'react'
import "./footer.css"
import logo from "../../assets/images/logo.png"
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
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Our magical recipe.</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>We care about environment.</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>We are trusted by hundreds of clients.
                        </li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Social media loves us!</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>This list is super easy to create.</li>
                    </ul>
                </div>
                <div class="hours">
                    <h4 class="footerTitle">Opening Hours</h4>
                    <ul>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Monday 10AM - 9PM</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Tuesday 10AM - 9PM</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Wednesday 10AM - 9PM</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Thursday 10AM - 10PM</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Friday 10AM - 10PM</li>
                        <li class="footerLi"><i class="fa-solid fa-angle-right"></i>Weekends 10AM - 11PM</li>
                    </ul>
                </div>
                <div class="details">
                    <h4 class="footerTitle">Contact Details</h4>
                    <ul>
                        <li class="footerLi"><i class="fa-solid fa-location-pin"></i>Manchester Road 123-78B, Silictown
                            7854MD, Great Country</li>
                        <li class="footerLi"><i class="fa-solid fa-phone-flip"></i>+46 123 456 789</li>
                        <li class="footerLi"><i class="fa-solid fa-envelope"></i>Friday 10AM - 10PM Weekends 10AM - 11PM
                            Contact Details Manchester Road 123-78B, Silictown 7854MD, Great Country +46 123 456 789
                            hello@sitename.com</li>
                        <li class="footerLi"><i class="fa-solid fa-globe"></i>http://www.sitename.com</li>
                    </ul>
                </div>
            </section>
            <section class="copywrite">
                <img src={logo} alt="logo" />
                <p>Copyright 2017. All rights reserved.
                </p>
                <ul>
                    <li class="socialIcon" id="facebook"><i class="fa-brands fa-facebook-f"></i></li>
                    <li class="socialIcon" id="google"><i class="fa-brands fa-google-plus-g"></i></li>
                    <li class="socialIcon" id="linkedin"><i class="fa-brands fa-linkedin-in"></i></li>
                    <li class="socialIcon" id="twitter"><i class="fa-brands fa-twitter"></i></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer