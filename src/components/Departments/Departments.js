import React from 'react';
import './Departments.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './department.jpg'
import men from './men.png'
import women from './women.png'
import kids from  './kids.png'
import sports from  './sports.png'

class Departments extends React.Component {
    render(){
        return (
            <div>
            <h1 className="category-header">Our Categories</h1>  
                <Row className="department-container">
                    <Col sm={6} md={4} lg={3} className='Departments'>                        
                        <img src={men}/>               
                    </Col>
                    <Col sm={6} md={4} lg={3}className='Departments'> 
                        <img src={women}/>                            
                    </Col>
                    <Col sm={6} md={4} lg={3} className='Departments'> 
                        <img src={kids}/>                            
                    </Col>
                    <Col sm={6} md={4} lg={3} className='Departments'> 
                        <img src={sports}/>                            
                    </Col>
                    <Col sm={6} md={4} lg={3} className='Departments'> 
                        <img src={image}/>                            
                    </Col>
                    <Col sm={6} md={4} lg={3} className='Departments'> 
                        <img src={image}/>                            
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Departments;