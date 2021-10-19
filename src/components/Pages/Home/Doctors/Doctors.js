import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './doctors.css'

const Doctors = () => {
    const [doctorDetails, setDoctorDetails] = useState([])
    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setDoctorDetails(data))
    }, [])

    console.log(doctorDetails);

    return (

        <div className="doctor-container container my-5">
            {

                doctorDetails.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)

            }
        </div>

    );
};

export default Doctors;