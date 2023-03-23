import React from "react";
import "./portfolio.css";
import data from "./data.js";

const Portfolio = () => {

    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2><br />
            <p>Some of the my projects</p>
            <div className="container portfolio__container">

                {
                    data.map((item) => {

                        return(
                        <article key={item.id} className="portfolio__item">

                            <div className="portfolio__item-image">
                                <img src={item.image} alt="" />
                            </div>
                            <h4>{item.title}</h4>
                            <div className="portfolio__btn">
                           <a href={item.gitHub} target="_blank" className="btn">GitHub</a>
                           <a href={item.liveDemo} target="_blank" className="btn primary">LiveDemo</a>
                           </div>

                        </article>
                        )

                    })
                }

            </div>
        </section>
    )

}

export default Portfolio;