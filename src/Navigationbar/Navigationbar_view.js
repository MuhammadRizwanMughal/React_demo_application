import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import './navigationbar.css'
import {LoggedIn} from '../isLoggedIn'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const navbar = (props) => {
    var links = null;
    if (LoggedIn())
    {
        links = (
            <Nav className="mr-auto">
             <Link to="/logout" className='nav-link'>Logout</Link>
            </Nav>
        );
    }
    else
    {
        links = (
            <Nav className="mr-auto">
                <Link to="/registration" className='nav-link'>Signup</Link>
                <Link to="/login" className='nav-link'>Login</Link> 
            </Nav>
        );
    }
    return(
        <div>
            <Navbar bg="light" fixed='top' expand="lg">
            <Navbar.Brand><Link to='/' className='brand-link'>Hello React</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {links}
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default navbar;