import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import image01 from '../../../../images/doctor/doctor-01.png';
import image02 from '../../../../images/doctor/doctor-02.png';
import image03 from '../../../../images/doctor/doctor-03.png';
import image04 from '../../../../images/doctor/doctor-04.png';
import image05 from '../../../../images/doctor/doctor-05.png';
import './doctor.css';

const Doctor = () => {
    return (
        <div className="row my-5 container mx-auto">
            <h1 className="text-center my-4" style={{ color: "#34495e" }}>Our Doctors</h1>
            <div className="team-container">
                <div className="w-25 mx-auto col-6" id="Doctor">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={image01}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h6 className="text-black">Dr. Abdullah korim</h6>
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
                                <h6 className="text-black">Dr. Sadia afrin promi</h6>
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
                                <h6 className="text-black">Dr. Sharif Ahmed</h6>
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
                                <h6 className="text-black">Dr. Abdullah al safin</h6>
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
                                <h6 className="text-black">Dr. Abdul Kadir</h6>
                                <Button variant="info">Dentisit</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-6 me-auto">
                    <h2>We Provide <br /> world bast Spiecalist Doctor</h2>
                    <h6>They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients. They also have to administer vaccines and other treatments.</h6>
                </div>
            </div>
        </div>
    );
};

export default Doctor;