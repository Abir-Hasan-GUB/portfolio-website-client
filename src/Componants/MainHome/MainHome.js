import React from 'react';
import About from '../Home/AboutMe/About';
import Banner from '../Home/Banner/Banner';
import Contacts from '../Home/Contacts/Contacts';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import Portfolio from '../Home/Portfolio/Portfolio';
import Sarvice from '../Home/Service/Sarvice';
import Skill from '../Home/Skils/Skill';

const MainHome = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <About/>
            <Skill/>
            <Sarvice/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default MainHome;