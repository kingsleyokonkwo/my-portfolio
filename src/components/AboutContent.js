import React from "react"
import "./AboutContent.css"
import { Link } from "react-scroll"
import Kene from "../images/kene.jpeg"
import KeneBack from "../images/bg-dark.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function AboutContent() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return(
        <div className="about" id="about">
            <div className="about--left">
                <h1>Who Am I?</h1>
                <p data-aos="zoom-up-in">
                    I am Okonkwo Kenechukwu Kingsley, I am an easy going web developer. Sometimes I enjoy what I do, sometimes
                    I don't but I get it done in both times, lol.
                </p>
                <p data-aos="zoom-up-in">
                    With my good command in HTML, CSS and JavaScript, I create responsive websites for my clients.
                </p>
                <p data-aos="zoom-up-in">
                    I decided to learn React so as to do my work more efficiently.
                </p>
                <Link to="contact">
                    <button className="btn">CONTACT</button>
                </Link>
            </div>

            <div className="about--right">
                <div className="img--container" data-aos="zoom-in">
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