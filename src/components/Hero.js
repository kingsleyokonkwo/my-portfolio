import React from "react"
import "./Hero.css"
import heroImg from "../images/bg-dark.jpg"
import { Link } from "react-scroll"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return(
        <div className="hero" id="hero">
            <div className="mask">
                <img className="hero--img"
                src={heroImg} alt="heroImg"/>
            </div>

            <div className="hero--content">
                <p>HI, I AM KINGSLEY OKONKWO</p>
                <h1 data-aos="zoom-up-in">A React Developer.</h1>

                <div>
                    <Link to="project" spy={true} smooth={true} offset={50} duration={500} className="btn" data-aos="zoom-in-up">
                    Projects
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="btn btn-light" data-aos="zoom-in">
                    Contact
                    </Link>
                </div>
            </div>
            
        </div>
    )
}