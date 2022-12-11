import React from 'react';
import './App.css';
import {GlobalStyle} from "./components/GlobalStyle";
import {Navbar} from "./components/Navbar/Navbar";
import MainSlider from './components/Swiper/Swiper';
import MainConstructionCase from "./components/MainConstructionCase/MainConstructionCase";
import {MainAbout} from "./components/MainAbout/MainAbout";
import {ReservationInfo} from "./components/ReservationInfo/ReservationInfo";
import {Footer} from "./components/Footer/Footer";

function App() {

    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <MainSlider/>
            <MainConstructionCase/>
            <MainAbout/>
            <ReservationInfo/>
            <Footer/>
        </>
    );
}

export default App;
