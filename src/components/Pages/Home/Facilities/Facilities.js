import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Facility from '../Facilitiy/Facility';
import './facilities.css'

const Facilities = () => {
    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        fetch('./facilites.json')
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, [])
    return (
        <div id="Facilites">
            <div className="text-center my-5">
                <h2 className="title-us">Our Facilites</h2>
                <h4>We Provide Best Services For Patient</h4>
            </div>
            <div className="facilities-container container">

                {
                    facilities.map(facility => <Facility
                        key={facility.id}
                        facility={facility}
                    ></Facility>)
                }
            </div>
            <div className="text-center my-4">
                <Button variant="secondary">Show All</Button>
            </div>

        </div>
    );
};

export default Facilities;