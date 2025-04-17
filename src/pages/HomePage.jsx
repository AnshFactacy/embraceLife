import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyEmbrace from '../components/WhyEmbrace';
import WellBeing from '../components/WellBeingSpaces';
import Journey from '../components/YourJourney';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEmbrace />
            <WellBeing />
            <Journey />
        </>
    );
}

export default HomePage;
