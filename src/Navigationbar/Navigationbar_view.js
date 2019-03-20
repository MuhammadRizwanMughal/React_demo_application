import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import './navigationbar.css'

const navbar = (props) => {
    return(
        <div>
            <Navbar bg="light" fixed='top' expand="lg">
            <Navbar.Brand>Hello React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default navbar;