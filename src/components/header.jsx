import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import header from "./header.module.css";
import netflix from "../assets/netflix.jpg";

const Header = () => {
    const [activeLink, setActiveLink] = useState("Home");

    const UpdateActive = (text) => {
        setActiveLink(text);
    };

    return (
        <div className={header.container}>
            <img src={netflix} alt="Netflix Logo"></img>
            <nav>
                <Link
                    to="/"
                    onClick={() => UpdateActive("Home")}
                    className={activeLink === "Home" ? header.activeLink : ""}
                >
                    Home
                </Link>
                <Link
                    to="/favourites"
                    onClick={() => UpdateActive("Favourites")}
                    className={activeLink === "Favourites" ? header.activeLink : ""}
                >
                    Favourites
                </Link>
            </nav>
        </div>
    );
};

export default Header;
