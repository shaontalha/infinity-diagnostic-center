import React from 'react';
import Contact from '../../Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <About></About>
            <Footer></Footer>


        </div>
    );
};

export default Home;