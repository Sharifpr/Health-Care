import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = (props) => {

    const { name, img, title, description } = props.doctor;

    return (
        <div className="">
            <div className="card mb-3 shadow">
                < div className="row g-0" >
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title text-uppercase">{name}</h4>
                            <p className="card-text text-muted"><strong>{title}</strong></p>
                            <p className="card-text">{description}</p>
                            <Link to="/Doctor"><button className="button-style">Book Now</button></Link>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Doctor;