import React from "react"
import "./ProjectCard.css"

export default function ProjectCard(props) {
    return(
                <div className="project--card">
                    <img src={props.imgsrc} alt="display of my work" />
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