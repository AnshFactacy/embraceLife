import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyEmbrace from '../components/WhyEmbrace';
import Ipad from '../components/IpadDisplay';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhyEmbrace />
            <Ipad />
        </>
    );
}

export default HomePage;
