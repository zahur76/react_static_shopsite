import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Footer extends React.Component {
    render(){
        return (
            <div>
                <Row>
                    <Col>
                        <h1>My Footer</h1>
                    </Col>
                </Row>
            </div> 
        )        
    }
}

export default Footer;
