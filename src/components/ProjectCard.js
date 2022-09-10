import React from "react"
import "./ProjectCard.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function ProjectCard(props) {
    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])
    return(
                <div className="project--card" data-aos="zoom-in">
                    <a href={props.view} >
                        <img src={props.imgsrc} alt="display of my work" />
                    </a>
                    <h2 className="project--title">{props.title}</h2>
                    <div className="project--details">
                        <p>{props.text}</p>
                        <div className="project--btns">
                            <a href={props.view}
                            className="btn">
                                View
                            </a>

                            <a href={props.source}
                            className="btn">
                               Source
                            </a>
                        </div>
                    </div>
                </div>
    )
}