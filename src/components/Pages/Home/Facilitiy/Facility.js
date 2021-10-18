import React from 'react';
import { Card } from 'react-bootstrap';
import './facilitiy.css'

const Facility = (props) => {
    const { img, title, description } = props.facility;
    return (
        <Card className="cart-style">
            <Card.Img className="image mx-auto my-4" src={img} />
            <Card.Body className="text-center">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description.slice(0, 100)}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Facility;