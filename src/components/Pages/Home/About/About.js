import React from 'react';
import { Accordion } from 'react-bootstrap';
import asideImage from '../../../../images/aside-image-1.png';
import './about.css'


const About = () => {
    return (
        <div className="container" id="About">
            <div className="text-center my-5">
                <h1 className="title-us">About Us</h1>
                <strong>Health is the most a precious treasure</strong>
            </div>
            <div className="row about-container">
                <div className="col-lg-6">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Experienced Physician</Accordion.Header>
                            <Accordion.Body>
                                A physician is a general term for a doctor who has earned a medical degree. Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases. Physicians generally have six core skills: Patient care.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Complate Health Fecilities</Accordion.Header>
                            <Accordion.Body>
                                A health facility is, in general, any location where healthcare is provided. Health facilities range from small clinics and doctor's offices to urgent care centers and large hospitals with elaborate emergency rooms and trauma centers.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Medical Standard Equipment</Accordion.Header>
                            <Accordion.Body>
                                The most common medical device manufacturing standards include: ISO 9001: This is the general standard for quality management.Compliance with ISO 13485 helps with overall quality control, traceability, process validation and risk management.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-lg-6 my-auto image-style">
                    <img className="" src={asideImage} style={{ height: "400px" }} alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;