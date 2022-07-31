import React from "react";
import "./Footer.css"
import { FaHome, FaMailBulk, FaPhone, FaGithub, FaLinkedin,FaTwitter } from "react-icons/fa"

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer--container">
                <div className="footer--left">
                    <div className="location">
                        <FaHome size={20} 
                        style={{ color: "green", marginRight: "2rem"}} />

                        <div>
                            <p>Enugu, Enugu State</p>
                            <p>Nigeria</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h3>
                            <FaPhone size={20} 
                            style={{ color: "green", marginRight: "2rem"}} />
                            (+234) 816-6982-470
                        </h3>
                    </div>

                    <div className="mail">
                        <h3>
                            <a href="mailto: kingsleyokonkwo16@gmail.com">
                                <FaMailBulk size={20} 
                                style={{ color: "green", marginRight: "2rem"}} />
                                info@gmail.com
                            </a>
                        </h3>
                    </div>
                </div>


                <div className="footer--right">
                    <h3>My Socials</h3>
                    <div className="social">

                        <a href="https://github.com/kingsleyokonkwo">
                            <FaGithub size={30} 
                            style={{ color: "green", marginRight: "1rem"}} />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/kenechukwu-okonkwo-155ba9224/">
                            <FaLinkedin size={30} 
                            style={{ color: "green", marginRight: "1rem"}} />
                        </a>
                        
                        <a href="https://twitter.com/kingsly_kenn">
                            <FaTwitter size={30} 
                            style={{ color: "green", marginRight: "1rem"}} />
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}