import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import image01 from '../../../../images/doctor/doctor-01.png';
import image02 from '../../../../images/doctor/doctor-02.png';
import image03 from '../../../../images/doctor/doctor-03.png';
import image04 from '../../../../images/doctor/doctor-04.png';
import image05 from '../../../../images/doctor/doctor-05.png';

const Doctor = () => {
    return (
        <div className="w-25 mx-auto" id="Doctor">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black">Dr. Abdullah korim</h3>
                        <Button variant="info">Darmatologist</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={image02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black">Dr. Sadia afrin promi</h3>
                        <Button variant="info">Cardiologist</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image03}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black">Dr. Sharif Ahmed</h3>
                        <Button variant="info">Neurologist</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image04}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black">Dr. Abdullah al safin</h3>
                        <Button variant="info">Nurologisit</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image05}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black">Dr. Abdul Kadir</h3>
                        <Button variant="info">Dentisit</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Doctor;