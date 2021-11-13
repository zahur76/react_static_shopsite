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
          return <Carousel.Item interval={2000}>
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
                <Carousel className="carousel">                
                    {this.renderOffers()}
                </Carousel>                  
            </div>
        )
    }
}

export default CarouselDeals;
