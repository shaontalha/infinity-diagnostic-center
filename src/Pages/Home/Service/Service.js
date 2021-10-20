import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, name, description, charge } = service
    return (
        <div className='service-detail '>

            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className='p-5'>{description}</p>
            <h6>Charge : BDT {charge}</h6>
            <Link to={`/booking/${id}`}>
                <button className='btn'>
                    Book  {name}
                </button>
            </Link>
        </div>
    );
};

export default Service;