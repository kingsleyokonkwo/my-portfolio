import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import AboutContent from "../components/AboutContent";

export default function About() {
    return(
        <div>
            <Navbar />
            <ProjectHero 
                heading="ABOUT."
                text="I am a Front-End Developer."
            />
            <AboutContent />
            <Footer />
        </div>
    )
}