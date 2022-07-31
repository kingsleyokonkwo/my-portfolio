import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import Work from "../components/Work";


export default function Project() {
    return(
        <div>
            <Navbar />
            <ProjectHero 
                heading ="PROJECTS."
                text="Some of my recent works"
            />
            <Work />
            <Footer />
        </div>
    )
}