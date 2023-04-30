import React from "react";
import "./navbar.css";
import Button from "../Button/Button";

const Navbar = ({toggle}) => {
  
  console.log(toggle)

    return (
        <nav className={toggle ? "navbar" : "navbarOpen"}>
            <ul className="navbar_list list">
                <li className="list_item item">
                    <a className="item_link" href="/">
                        Home
                    </a>
                </li>
                <li className="list_item item">
                    <a className="item_link" href="/about">
                        About
                    </a>
                </li>
                <li className="list_item item">
                    <a className="item_link" href="/contact">
                        Contact
                    </a>
                </li>
            </ul>

            <Button text={"Download CV"} />
        </nav>
    );
};

export default Navbar;
