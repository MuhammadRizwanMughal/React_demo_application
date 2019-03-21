import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import './navigationbar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const navbar = (props) => {
    let link = <Link to="/login" className='nav-link'>Login</Link>;
    // if (LoggedIn)
    // {
    //     link = <Link to="/logout" className='nav-link'>Logout</Link>
    // }
    return(
        <div>
            <Navbar bg="light" fixed='top' expand="lg">
            <Navbar.Brand><Link to='/' className='brand-link'>Hello React</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/registration" className='nav-link'>Signup</Link>
                    {link}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default navbar;