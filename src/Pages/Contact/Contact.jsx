import React from "react";
import "./contact.css";
const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact_descriptions">
                    <h2 className="contact_title">Contact Me</h2>
                    <div className="contact_wraper">
                        <a
                            className="contact_link"
                            href="mailto:sattarovjabboro4@gmail.com"
                            target="_blanck"
                        >
                            <b>Send message</b>
                            <br />
                            @abdujabbor_sattarov
                        </a>
                        <a className="contact_link" href="tel:+998992673121">
                            <b>Call me Phone</b>
                            <br />
                            +998992673121
                        </a>
                    </div>
                    <form className="contact_form">
                        <input className="form_input" type="text" name="username" placeholder="Your Name"/>
                        <input className="form_input" type="text" name="email"  placeholder="Your Email"/>
                        <textarea className="form_textarea" cols="30" rows="10" placeholder="Message"></textarea>
                        <button className="form_button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
