import React from "react";
import "./Form.css"
import emailjs from "emailjs-com"

export default function Form() {


    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm(
            "service_k2wf3qj", 
            "template_0ejpvr4", 
            e.target, 
            "KQ2zx1GxxcFpz292o"
        ).then(res=>{
            console.log(res)
        }).catch(err=> console.log(err))
        e.target.reset()
    }

    return(

        <div className="form" onSubmit={sendEmail}>
            <h1 className="form--heading">Contact Me!</h1>
            <form>
                <label>Name</label>
                <input type="text" name="Name"></input>

                <label>Email</label>
                <input type="email" name="user_email"></input>
                
                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Type your text here!" />
                <button className="btn">SUBMIT</button>
            </form>
        </div>
    )
}