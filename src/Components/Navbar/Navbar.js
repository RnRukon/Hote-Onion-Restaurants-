import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbars = () => {
    return (
        <Navbar className=" lg:px-20 md:px-10" fixed="top" bg="light" expand="lg">
            <Navbar.Brand href="#"><img className='img-fluid w-40' src="https://i.ibb.co/Wn8kLFW/logo2.png" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/action1"><img src="https://i.ibb.co/8xksV5c/Path-1.png" alt="" /></Nav.Link>
                    <Nav.Link as={NavLink} to="/action1" className="fw-bold">Login</Nav.Link>

                    <Nav.Link as={NavLink} to="/action1"><button className="bg-pink-500 py-1 px-6 rounded-pill text-white fw-bold">Sign in</button></Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;