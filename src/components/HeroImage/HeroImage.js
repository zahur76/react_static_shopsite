import React from 'react';
import './HeroImage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './HeroImage.jpg'; 


class HeroImage extends React.Component {
    render(){
        return (
            <Row>
                <Col className='HeroImage'> 
                    <img src={image}/>
                    <img className="confetti" src='https://i.gifer.com/2ii9.gif'/>                                                                 
                </Col>
            </Row>
        )
    }
}

export default HeroImage;