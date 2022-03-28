import React from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    return (
        <section className="contact paddingY">
            <div className="container flexContainer">
                <div className="contactInfo">
                    <h2 className="title">
                        Contact Information
                    </h2>
                    <p className="titleDesc">
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <p>Our contact details:</p>
                    <ul className="contactList">
                        <li>
                            <FontAwesomeIcon className='icon' icon={faHeadphonesSimple} />
                            Manchester St 123-78B, Random 713, UK
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faPhoneFlip} />
                            +46 123 456 789
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faHeadphonesSimple} />
                            +37 431 456 789
                        </li>
                        <li>
                            <FontAwesomeIcon className='icon' icon={faHeadphonesSimple} />
                            hello@sitename.com
                        </li>
                    </ul>
                </div>
                <div className="contactMap">
                    <div className="mapouter">
                        <div className="gmap_canvas"><iframe id="gmap_canvas"
                            src="https://maps.google.com/maps?q=%D9%85%D8%B9%D8%A7%D8%AF%D9%8A%20%D8%AC%D8%B1%D8%A7%D9%86%D8%AF%20%D9%85%D9%88%D9%84&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            <a href="https://fmovies-online.net"></a>
                            <a href="https://www.embedgooglemap.net">free goggle map</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact