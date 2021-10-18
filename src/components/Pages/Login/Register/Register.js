import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-center my-5">
            <h2>SIGN UP</h2>
            <form>
                <input type="email" name="email" id="" /> <br />
                <input type="password" name="password" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/Login">Already Registered?</Link>
        </div>
    );
};

export default Register;