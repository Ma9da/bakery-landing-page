import React from 'react'
import "./contact.css"
function Contact() {
    return (
        <section class="contact paddingY">
            <div class="container flexContainer">
                <div class="contactInfo">
                    <h2 class="title">
                        Contact Information
                    </h2>
                    <p class="titleDesc">
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <p>Our contact details:</p>
                    <ul class="contactList">
                        <li>
                            <i class="icon fa-solid fa-headphones-simple"></i>
                            Manchester St 123-78B, Random 713, UK
                        </li>
                        <li>
                            <i class="icon fa-solid fa-phone-flip"></i>
                            +46 123 456 789
                        </li>
                        <li>
                            <i class="icon fa-solid fa-headphones-simple"></i>
                            +37 431 456 789
                        </li>
                        <li>
                            <i class="icon fa-solid fa-headphones-simple"></i>
                            hello@sitename.com
                        </li>
                    </ul>
                </div>
                <div class="contactMap">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe id="gmap_canvas"
                            src="https://maps.google.com/maps?q=%D9%85%D8%B9%D8%A7%D8%AF%D9%8A%20%D8%AC%D8%B1%D8%A7%D9%86%D8%AF%20%D9%85%D9%88%D9%84&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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