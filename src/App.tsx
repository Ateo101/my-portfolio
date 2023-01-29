import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Menu/>
            <main role="main">
                <Home/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contacts/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
