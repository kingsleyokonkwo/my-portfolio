import React from "react"
import "./AboutContent.css"
import { Link } from "react-router-dom"
import Kene from "../images/kene.jpeg"
import KeneBack from "../images/bg-dark.jpg"

export default function AboutContent() {
    return(
        <div className="about">
            <div className="about--left">
                <h1>Who Am I?</h1>
                <p>
                    I am Okonkwo Kenechukwu Kingsley, I am an easy going web developer. Sometimes I enjoy what I do, sometimes
                    I don't but I get it done in both times, lol.
                </p>
                <p>
                    With my good command in HTML, CSS and JavaScript, I create responsive websites for my clients.
                </p>
                <p>
                    I decided to learn React so as to do my work more efficiently.
                </p>
                <Link to="/contact">
                    <button className="btn">CONTACT</button>
                </Link>
            </div>

            <div className="about--right">
                <div className="img--container">
                    <div className="img--stack top">
                        <img src={Kene} className="img" alt="Kene"/>
                    </div>

                    <div className="img--stack bottom">
                        <img src={KeneBack} className="img" alt="code"/>
                    </div>
                </div>
            </div>
        </div>
    )
}