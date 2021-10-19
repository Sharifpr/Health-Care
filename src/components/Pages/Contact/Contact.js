import React from 'react';
import './Contact.css'
import contactImage from '../../../images/contact.jpg'
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div className="row contact-container container mx-auto">
            <div className="col-lg-5 my-5">
                <h2>Contact Us</h2>
                <p>Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.</p>
                <Link className="button-style" to="/Contact">Contact</Link>
            </div>
            <div className="col-lg-7 contact-image text-center">
                <img src={contactImage} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default Contact;