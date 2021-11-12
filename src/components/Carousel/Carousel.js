import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import offers from './offers.js'


class CarouselDeals extends React.Component {
    renderOffers(){
        return Object.keys(offers).map(offer => {
          let offerValue = offers[offer];
          return <Carousel.Item interval={1000}>
                    <img className="d-block" src={offerValue.image} alt="First slide"/>
                        <Carousel.Caption>
                                    <h3>
                                        {offerValue.name}{'\n'} 
                                        ${offerValue.price}
                                    </h3>
                                                        
                        </Carousel.Caption>
                </Carousel.Item>
        });        
    }    
    render(){
        return (
            <div>
                <h1 className="offer-header">Offers</h1>
                <Row className="carousel-container">
                    <Col xs={7} sm={5} md={4} lg={3}>
                        <Carousel className="carousel">                
                            {this.renderOffers()}
                        </Carousel>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CarouselDeals;
