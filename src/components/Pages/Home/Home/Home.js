import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Services from '../../Services/Services';
import Doctor from '../Doctor/Doctor';




const Home = () => {
    return (
        <div id="Home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Facilities></Facilities>
            <Doctor></Doctor>

        </div>
    );
};

export default Home;