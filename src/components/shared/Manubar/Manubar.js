import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Manubar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#Home">Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/Home#Home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/Home#About">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/Home#Services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/Home#Facilites">Facilites</Nav.Link>
                        <Nav.Link as={HashLink} to="/Home#Doctor">Doctor</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="primary">Log out</Button> :
                            <Nav.Link as={Link} to="/Login">Log in </Nav.Link>

                        }
                        <Navbar.Text>
                            <a style={{ marginLeft: "7px", textDecoration: "none" }} href="#login"> {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Manubar;