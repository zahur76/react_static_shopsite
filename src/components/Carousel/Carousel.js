import image from './dolphin.jpg'
import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CarouselDeals extends React.Component {
    render(){
        return (
            <div>
                <h1 className="offer-header">Offers</h1>
                <Row className="carousel-container">
                    <Col xs={7} sm={5} md={4} lg={3}>
                        <Carousel className="carousel">                
                            <Carousel.Item interval={1000}>
                                <img
                                className="d-block"
                                src={image}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                className="d-block"
                                src={image}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src={image}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>                    
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CarouselDeals;
