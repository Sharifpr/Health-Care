import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div id="Services">
            <div className="text-center my-5">
                <h2>Our Services</h2>
                <h4>We provide our bast services all over the world</h4>
            </div>
            <div className="service-container my-5 container">
                {
                    item.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;