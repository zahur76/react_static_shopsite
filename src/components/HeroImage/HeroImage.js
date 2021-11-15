import React from 'react';
import './HeroImage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import image from './heroImage.jpg';


class HeroImage extends React.Component {
    render(){
        return (
            <Row>
                <Col xs={12} className='HeroImage'> 
                    <img src={image}/>
                    <img className="confetti" src='https://i.gifer.com/2ii9.gif'/>                                                                 
                </Col>
                <Col className="search-bar" xs={12}>
                    <Form>
                        <Row>
                            <Col xs={6} className="form-col-6">
                                <Form.Control className="city" placeholder="Search" />
                            </Col>
                            <Col xs={1} className="submit-col-1">                        
                                <Button className="submit-button" type="submit">Submit</Button>
                            </Col>
                        </Row>                       
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default HeroImage;