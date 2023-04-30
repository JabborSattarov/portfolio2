import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { CloseIcon, MenuIcon } from "../../Assets/Icons/Icons";

import "./header.css";
const Header = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <header className="header">
            <div className="container">
                <div className="header_main">
                    <a className="header_logo" href="/">
                        <h2>Abdujabbor Sattarov</h2>
                    </a>
                    <div
                        className="toggle"
                        onClick={() =>
                            toggle ? setToggle(false) : setToggle(true)
                        }
                    >
                        {toggle ? <MenuIcon /> : <CloseIcon />}
                    </div>
                    <Navbar toggle={toggle} />
                </div>
            </div>
        </header>
    );
};

export default Header;
