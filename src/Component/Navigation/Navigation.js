import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar className="container" expand="lg">
                <Navbar.Toggle className="Toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100">
                        <ul className="">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Service & Package</Link>
                            </li>
                            <li>
                                <Link to="/">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li style={{"border-bottom":" 1px solid black"}}>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;