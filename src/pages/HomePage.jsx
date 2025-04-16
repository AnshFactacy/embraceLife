import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyEmbrace from '../components/WhyEmbrace';
import Ipad from '../components/IpadDisplay';
import WellBeing from '../components/WellBeingSpaces';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEmbrace />
            <Ipad />
            <WellBeing />
        </>
    );
}

export default HomePage;
