import React from "react";
import "./Navbar.css"
import { Link } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
    const [click, setClick] = React.useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const homeClick = () => {
        setClick(false)
    }

    const [color, setColor] = React.useState(false)
    const changeColor = () => {
        if(window.scrollY >= 60) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={homeClick}>
                <h1>keneCode</h1>
            </Link>

            <ul className={click ? "nav--links active" : "nav--links"}>
                <li>
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Home</Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-150} duration={500} onClick={handleClick}>About</Link>
                </li>
                <li>
                    <Link to="project" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Project</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Contact</Link>
                </li>
            </ul>

            <div className="hambuurger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color: "#fff"}}/>
                ) : (
                    <FaBars size={20} style={{color: "#fff"}}/>
                )}
                
                
            </div>
        </div>
    )
}