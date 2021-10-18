import React from 'react';
import { Carousel } from 'react-bootstrap';
import image01 from '../../../../images/background/better-technology.jpg'
import image02 from '../../../../images/background/emergency-services.jpg'
import image03 from '../../../../images/background/heart-specialist.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={image02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image03}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Third slide label</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;