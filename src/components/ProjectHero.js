import React from "react";
import "./ProjectHero.css"

export default function ProjectHero(props) {
    return(
        <div className="hero--img">
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}