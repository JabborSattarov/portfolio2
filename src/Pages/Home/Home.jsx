import React from "react";
import "./home.css";
import { InstagamIcon, LinkdeInIcon, TelegramIcon } from "../../Assets/Icons/Icons";
const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="home_descriptions desc">
                    <h3 className="desc_hello">Hello 👋</h3>
                    <h2 className="desc_name">I'm Abdujabbor Sattarov</h2>
                    <h2 className="desc_job">
                        I'm <span className="js">Javascript</span> /{" "}
                        <span className="ts">Typescript</span> developer
                    </h2>
                    <div className="desc_icons">
                        <a className="about_button" href="/about">About Me</a>
                        <a
                            className="instagram_icon"
                            href="https://instagram.com/jabbor_o4o"
                            target="_blanck"
                        >
                            <InstagamIcon />
                        </a>
                        <a
                            className="telegram_icon"
                            href="https://t.me/Abdujabbor_Sattarov"
                            target="_blanck"

                        >
                            <TelegramIcon />
                        </a>
                        <a
                            className="linkedin_icon"
                            href="https://www.linkedin.com/in/abdujabbor-sattarov-072bb326b/"
                            target="_blanck"
        
                        >
                            <LinkdeInIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
