import React from 'react';
import { Carousel } from 'react-bootstrap';
import image01 from '../../../../images/background/better-technology.jpg'
import image02 from '../../../../images/background/emergency-services.jpg'
import image03 from '../../../../images/background/heart-specialist.jpg'
import './banner.css'

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
                    <Carousel.Caption className="banner-title">
                        <h1>EMERGENCY SERVICES</h1>
                        <p>If you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing elit. Ut volutpat eros adipiscing elit Ut volutpat. aliquam erat volutpat.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={image02}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="banner-title">
                        <h1>BETTER TECHNOLOGY</h1>
                        <p>If you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
                            adipiscing elit. Ut volutpat eros adipiscing elit Ut volutpat.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image03}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="banner-title">
                        <h1>HEART SPECIALIST</h1>
                        <p>If you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
                            adipiscing elit. Ut volutpat eros adipiscing elit Ut volutpat.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;