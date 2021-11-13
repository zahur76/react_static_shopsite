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
          return <Carousel.Item interval={4000}>
                    <img className="carousel-image" src={offerValue.image} alt="First slide"/>
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
            <div className="carousel-container">
                <h1 className="offer-header">Offers</h1>
                <Row>
                    <Col md={6}>               
                        <div className="sales">
                            <p className="sales-text">Upto 50% Discount!</p>
                            <div className="sales-overlay"></div>
                        </div>                        
                    </Col>
                    <Col md={6}>               
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
