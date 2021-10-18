import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId, title } = useParams()
    return (
        <div>
            <p>{title}</p>
            <h1>this is booking {serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;