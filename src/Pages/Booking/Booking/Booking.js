import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `services.json/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>This is Booking {serviceId}</h2>
            <h2>{service.name}</h2>



        </div>
    );
};

export default Booking;