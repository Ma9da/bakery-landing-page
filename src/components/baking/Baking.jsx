import React from 'react'
import "./baking.css"
import baking1 from "../../assets/images/baking1.jpeg"
import baking2 from "../../assets/images/baking2.jpeg"
import baking3 from "../../assets/images/baking3.jpeg"

function Baking(props) {
    return (
        <section className="baking paddingY">
            <div className="container flexContainer">
                <header className="bakingHeader">
                    <h2 className="title" style={{'color':props.baking.color}}>{props.baking.title}</h2>
                    <p className="titleDesc">Learn more about them. We have worked truly hard to make them perfect for
                        every
                        use.
                    </p>
                </header>
                <div className="bakingItems">
                    <figure className="bakingItem">
                        <img src={baking1} alt="" className="bakingImg"/>
                            <h4 className="bakingTitle">Superior Breads</h4>
                            <figcaption>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at
                                semper
                                mauris velit a velit. Phasellus commodo turpis et lacinia posuere.
                            </figcaption>
                    </figure>
                    <figure className="bakingItem">
                        <img src={baking2} alt="" className="bakingImg"/>
                            <h4 className="bakingTitle">Bagels</h4>
                            <figcaption>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at
                                semper
                                mauris velit a velit. Phasellus commodo turpis et lacinia posuere.
                            </figcaption>
                    </figure>
                    <figure className="bakingItem">
                        <img src={baking3} alt="" className="bakingImg"/>
                            <h4 className="bakingTitle">Cookies</h4>
                            <figcaption>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at
                                semper
                                mauris velit a velit. Phasellus commodo turpis et lacinia posuere.
                            </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Baking