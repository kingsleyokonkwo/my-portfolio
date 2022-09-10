import React from "react"
import "./ProjectCard.css"
import ProjectCard from "./ProjectCard"
import WorkCardData from "./WorkCardData"

export default function Work() {
    return(
        <div className="work--container" id="project">
            <h1 className="project--heading">Projects</h1>
            <div className="Project--container">
                {WorkCardData.map((val, ind) => {
                    return(
                        <ProjectCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}