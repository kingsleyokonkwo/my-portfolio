import React from "react"
import "./ProjectCard.css"

export default function ProjectCard(props) {
    return(
                <div className="project--card">
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