import React from "react"
import "./Hero.css"
import heroImg from "../images/bg-dark.jpg"
import { Link } from "react-router-dom"

export default function Hero() {
    return(
        <div className="hero">
            <div className="mask">
                <img className="hero--img"
                src={heroImg} alt="heroImg"/>
            </div>

            <div className="hero--content">
                <p>HI, I AM KINGSLEY OKONKWO</p>
                <h1>A React Developer.</h1>

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