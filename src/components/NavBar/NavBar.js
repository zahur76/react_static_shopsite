import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/esm/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/esm/Nav'
import { NavDropdown } from 'react-bootstrap';
class NavBar extends React.Component {
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" className='custom-nav' variant="dark">
                <Container>
                    <Navbar.Brand className="logo" href="#home">Shop All Day</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link className="links" href="#deets">Contact Us</Nav.Link>
                            <Nav.Link className="links" eventKey={2} href="#memes">
                                Links
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;