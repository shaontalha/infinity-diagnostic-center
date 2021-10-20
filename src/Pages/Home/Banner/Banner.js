import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/149218913-medical-service-concept-with-patient-and-ventilator-flat-design-vector-illustration.jpg'
import './Banner.css'
const Banner = () => {
    return (

        <div className='banner'>
            <img src={banner1} alt="" />
        </div>


    );
};

export default Banner;