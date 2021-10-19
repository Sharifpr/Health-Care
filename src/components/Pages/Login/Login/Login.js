import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import image from '../../../../images/online-registration-sign-up-concept-with-man-character_268404-98.jpg';
import './login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    const { signInUsingGoogle, signInUsingGitHub } = useAuth();

    const auth = getAuth();


    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 6) {
            setError('password must be 6 characters.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password should contain at least two upper case')
            return;
        }

        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                verifyEmail()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }



    return (
        <div className="row my-5 align-items-center  container">
            <div className="col-lg-7">
                <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 shadow px-5 py-5 shadow" style={{ borderRadius: "15px" }}>
                <div className="">
                    <form onSubmit={handleRegistration}>
                        <h3 className="text-danger text-center my-4">{isLogin ? 'SIGN IN' : 'SIGN UP'}</h3>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                                <p className="text-danger">{error}</p>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset</button>
                                <div className="my-2">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label mx-2" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>

                                </div>

                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary my-3">{isLogin ? 'SIGN IN' : 'SIGN UP'}</button>

                    </form>
                    <hr className="my-1" />
                    <div className="text-center mt-3">
                        <strong>SIGN IN WITH</strong> <br />
                        <div className="">
                            <button onClick={signInUsingGoogle} className="btn btn-danger btn-style"><i className="fab fa-google"></i></button>
                            <button onClick={signInUsingGitHub} className="btn btn-dark btn-style"><i className="fab fa-github"></i></button>
                            <button className="btn btn-dark btn-style"><i className="fab fa-facebook "></i></button>
                        </div>


                    </div>


                </div>
            </div>
        </div >
    );
};

export default Login;