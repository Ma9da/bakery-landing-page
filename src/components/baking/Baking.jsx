import React from 'react'
import baking1 from "../../assets/images/baking1.jpeg"
import baking2 from "../../assets/images/baking2.jpeg"
import baking3 from "../../assets/images/baking3.jpeg"

function Baking() {
    return (
        <section class="baking paddingY">
            <div class="container flexContainer">
                <header class="bakingHeader">
                    <h2 class="title">Our Baking</h2>
                    <p class="titleDesc">Learn more about them. We have worked truly hard to make them perfect for
                        every
                        use.
                    </p>
                </header>
                <div class="bakingItems">
                    <figure class="bakingItem">
                        <img src={baking1} alt="" class="bakingImg"/>
                            <h4 class="bakingTitle">Superior Breads</h4>
                            <figcaption>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at
                                semper
                                mauris velit a velit. Phasellus commodo turpis et lacinia posuere.
                            </figcaption>
                    </figure>
                    <figure class="bakingItem">
                        <img src={baking2} alt="" class="bakingImg"/>
                            <h4 class="bakingTitle">Bagels</h4>
                            <figcaption>Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at
                                semper
                                mauris velit a velit. Phasellus commodo turpis et lacinia posuere.
                            </figcaption>
                    </figure>
                    <figure class="bakingItem">
                        <img src={baking3} alt="" class="bakingImg"/>
                            <h4 class="bakingTitle">Cookies</h4>
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