import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <Features></Features>
        </div>
    );
};

export default Home;