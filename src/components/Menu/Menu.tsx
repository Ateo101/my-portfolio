import React, {useEffect, useState} from "react";
import s from "./Menu.module.css"
import {linear, Scrollchor} from "react-scrollchor";

const Menu = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <header className={scroll ? s.navigation + ' ' + s.scroll : s.navigation}>
            <nav className={s.menu}>
                <li><Scrollchor to="home" animate={{duration: 500, easing: linear}}>Home</Scrollchor></li>
                <li><Scrollchor to="about" animate={{duration: 500, easing: linear}}>About</Scrollchor></li>
                <li><Scrollchor to="skills" animate={{duration: 500, easing: linear}}>Skills</Scrollchor></li>
                <li><Scrollchor to="portfolio" animate={{duration: 500, easing: linear}}>Portfolio</Scrollchor></li>
                <li><Scrollchor to="contacts" animate={{duration: 500, easing: linear}}>Contacts</Scrollchor></li>
            </nav>
        </header>
    )

}

export default Menu;