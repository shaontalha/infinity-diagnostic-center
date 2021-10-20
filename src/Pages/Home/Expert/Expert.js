import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { img, name, expertize } = expert;
    return (
        <div className='expert-detail col-lg-4 col-sm-6 col-12'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Specialist In : <span className='text-danger'>{expertize}</span> </h5>

        </div>
    );
};

export default Expert;