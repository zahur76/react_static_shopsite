import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav'

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
                        <Nav.Link className="links" href="#deets">Home</Nav.Link>
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