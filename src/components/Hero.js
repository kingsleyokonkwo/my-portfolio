import React from "react"
import "./Hero.css"
import heroImg from "../images/bg-dark.jpg"
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Hero() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return(
        <div className="hero">
            <div className="mask">
                <img className="hero--img"
                src={heroImg} alt="heroImg"/>
            </div>

            <div className="hero--content">
                <p data-aos="zoom-in">HI, I AM KINGSLEY OKONKWO</p>
                <h1 data-aos="zoom-up-in">A React Developer.</h1>

                <div>
                    <Link to="/project" className="btn">
                    Projects
                    </Link>
                    <Link to="/contact" className="btn btn-light">
                    Contact
                    </Link>
                </div>
            </div>
            
        </div>
    )
}