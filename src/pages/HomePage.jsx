import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyEmbrace from '../components/WhyEmbrace';
import WellBeing from '../components/WellBeingSpaces';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEmbrace />
            <WellBeing />
        </>
    );
}

export default HomePage;
