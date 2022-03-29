import React from 'react'
import "./footer.css"
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faEnvelope, faGlobe, faLocationPin, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
function Footer(props) {
    return (
        <footer>
            <section className="footerLinks paddingY container">
                <div className="aboutFooter">
                    <h4 className="footerTitle">{props.footerTitle.titleOne}</h4>
                    <p className="footerText">
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I
                        am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <p className="footerText">
                        We are the champions! We are the most amazing theme of all time, yeah.
                    </p>
                </div>
                <div className="special">
                    <h4 className="footerTitle">{props.footerTitle.titleTwo}</h4>
                    <ul>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Our magical recipe.</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />We care about environment.</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />We are trusted by hundreds of clients.
                        </li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Social media loves us!</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />This list is super easy to create.</li>
                    </ul>
                </div>
                <div className="hours">
                    <h4 className="footerTitle">{props.footerTitle.titleThree}</h4>
                    <ul>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Monday 10AM - 9PM</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Tuesday 10AM - 9PM</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Wednesday 10AM - 9PM</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Thursday 10AM - 10PM</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Friday 10AM - 10PM</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faAngleRight} />Weekends 10AM - 11PM</li>
                    </ul>
                </div>
                <div className="details">
                    <h4 className="footerTitle">{props.footerTitle.titleFour}</h4>
                    <ul>
                        <li className="footerLi"><FontAwesomeIcon icon={faLocationPin} />Manchester Road 123-78B, Silictown
                            7854MD, Great Country</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faPhoneFlip} />+46 123 456 789</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faEnvelope} />Friday 10AM - 10PM Weekends 10AM - 11PM
                            Contact Details Manchester Road 123-78B, Silictown 7854MD, Great Country +46 123 456 789
                            hello@sitename.com</li>
                        <li className="footerLi"><FontAwesomeIcon icon={faGlobe} />http://www.sitename.com</li>
                    </ul>
                </div>
            </section>
            <section className="copywrite">
                <img src={logo} alt="logo" />
                <p>Copyright 2017. All rights reserved.
                </p>
                <ul>
                    <li className="socialIcon" id="facebook"><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li className="socialIcon" id="google"><FontAwesomeIcon icon={faGooglePlusG} /></li>
                    <li className="socialIcon" id="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></li>
                    <li className="socialIcon" id="twitter"><FontAwesomeIcon icon={faTwitter} /></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer