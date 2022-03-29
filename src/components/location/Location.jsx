import React from 'react'
import about2 from "../../assets/images/about2.jpeg"
import "./location.css"
import "../about/about.css"
function Location(props) {
    return (
        <section className="location about paddingY">
            <div className="container flexContainer">
                <header className="aboutHeader">
                    <h2 className="title" style={{ "color": props.location.color }}>{props.location.title}</h2>
                    <p className="titleDesc">
                        We have been operating for over 30 years and are Members of The Federation of Master
                        Builders.
                        We
                        work on projects big and small from small residential extensions to full house. We are
                        so happy
                        with
                        this theme. Everyday it make our lives better.
                    </p>
                    <p className="titleDesc">
                        Story on projects big and small from small residential extensions to full house. We are
                        so happy
                        with this theme. Everyday it make our lives better.
                    </p>
                </header>
                <figure className="aboutImg">
                    <img src={about2} alt="backery" />
                </figure>
            </div>
        </section>
    )
}

export default Location