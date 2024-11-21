import React from 'react';
import Hero from '../components/Hero';
import Stages from '../components/Stages';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import Calculate from '../components/Calculate';

const Home = () => {
    return (
        <>
            <Hero />
            <Stages />
            <Services />
            <Advantages />
            {/* <Calculate /> */}
        </>
    );
}

export default Home;
