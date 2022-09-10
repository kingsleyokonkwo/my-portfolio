import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Work from "../components/Work"
import Form from "../components/Form";
import AboutContent from "../components/AboutContent";


export default function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <AboutContent />
            <Work />
            <Form />
            <Footer />
        </div>
    )
}