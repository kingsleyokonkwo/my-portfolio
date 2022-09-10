import React from "react";
import "./ProjectHero.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function ProjectHero(props) {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return(
        <div className="hero--img">
            <div className="heading">
                <h1>{props.heading}</h1>
                <p data-aos="zoom-in-up">{props.text}</p>
            </div>
        </div>
    )
}