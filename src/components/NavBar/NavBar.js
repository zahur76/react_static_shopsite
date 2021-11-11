import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class NavBar extends React.Component {
    render(){
        return (
            <div className='NavBar'>
                <Row>
                    <Col><h1 className='heading'>Shop All Day</h1></Col>
                </Row>
            </div>
        )
    }
}

export default NavBar;