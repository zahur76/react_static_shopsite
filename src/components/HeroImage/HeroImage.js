import React from 'react';
import './HeroImage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './heroImage.jpg'; 


class HeroImage extends React.Component {
    render(){
        return (
            <Row>
                <Col className='HeroImage'> 
                    <img src={image}/>               
                </Col>
            </Row>
        )
    }
}

export default HeroImage;