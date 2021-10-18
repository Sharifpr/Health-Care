import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './serviceDetails.css';


const ServiceDetails = () => {
    const { serviceId } = useParams()

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const serviceDetials = details?.find(service => service.id === serviceId);

    console.log(serviceDetials);

    return (
        <Card className="cart-details mx-auto my-5">
            <Card.Img variant="top" src={serviceDetials?.img} />
            <Card.Body>
                <Card.Title>{serviceDetials?.title}</Card.Title>
                <Card.Text>
                    {serviceDetials?.decription}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default ServiceDetails;