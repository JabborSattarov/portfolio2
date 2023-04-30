import React from "react";
import "./about.css";
import {
    InstagamIcon,
    LinkdeInIcon,
    TelegramIcon,
} from "../../Assets/Icons/Icons";
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about_descriptions">
                    {/* <h2 className="about_title">About Me</h2> */}
                    <h3 className="about_name">Abdujabbor Sattarov</h3>
                    <p className="about_text">
                        My name is Abdujabbar Sattarov. I am a FullStack web
                        developer. I am very interested in programming and know
                        Javascript. I am using HTML CSS Bootstrap Javacript
                        React js to build websites. For the backend of the site,
                        I use Node Js Express Js Nest JS TypeOrm mongoDB
                        postgresQL mongoose etc. I am a selfless person who
                        strives for my dreams, hardworking and results-oriented,
                        I always strive to achieve my best version. My goal is
                        to create programs that will benefit humanity in the
                        future. And I won't stop working on myself.
                    </p>
                    <div className="about_icons">
                        <a className="contact_button" href="/contact">
                            Contact
                        </a>

                        <a
                            className="instagram_icon"
                            href="https://instagram.com/jabbor_o4o"
                        >
                            <InstagamIcon />
                        </a>
                        <a
                            className="telegram_icon"
                            href="https://instagram.com/jabbor_o4o"
                        >
                            <TelegramIcon />
                        </a>
                        <a
                            className="linkedin_icon"
                            href="https://instagram.com/jabbor_o4o"
                        >
                            <LinkdeInIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
