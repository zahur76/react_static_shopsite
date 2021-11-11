import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class NavBar extends React.Component {
    render(){
        return (
            <div className='NavBar'>
                <Row className='row'>
                    <Col xs='0' md='3'></Col>
                    <Col xs='9' md='6'><a href="#" className='heading'>Shop All Day</a></Col>
                    <Col xs='3' md='3'>Contact Us</Col>
                </Row>
            </div>
        )
    }
}

export default NavBar;