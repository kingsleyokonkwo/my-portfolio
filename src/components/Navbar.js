import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
    const [click, setClick] = React.useState(false)
    const handleClick = () => {
        setClick(!click)
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
            <Link to="/">
                <h1>keneCode</h1>
            </Link>

            <ul className={click ? "nav--links active" : "nav--links"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
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