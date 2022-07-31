import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import Form from "../components/Form";

export default function Contact() {
    return(
        <div>
            <Navbar />
            <ProjectHero 
                heading="CONTACT."
                text="Let's have a chat."
            />
            <Form />
            <Footer />
        </div>
    )
}