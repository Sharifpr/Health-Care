import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, title, img, decription } = props.service;
    return (
        <Card>
            <Card.Img variant="top" src={img} style={{ height: "332px" }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {decription.slice(0, 100)}
                </Card.Text>
                <Link to={`/ServiceDetails/${id}`}><Button variant="secondary">Details</Button></Link>
            </Card.Body>

        </Card>
    );
};

export default Service;