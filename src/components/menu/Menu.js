import React from 'react';
import './Menu.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const menus = {
    all: 'All',
    men : "Men",
    women: "Women",
    kids: "kids"
}


class Menu extends React.Component {
    constructor(props) {
        super(props);
        // set current state of searchbar/Dynamnic values
        this.state = {sortBy: 'All'};        
    }

    getSortByClass(menu){
        if(menu===this.state.sortBy){
            return 'menu active'
        }else {
            return 'menu'
        }
    }

    handleSortByChange(menuValue){
        this.setState({ sortBy: menuValue})
    }

    renderMenu(){
        return Object.keys(menus).map(menu=>{
            let menuValue = menus[menu];
            return <Col><a href="#" onClick={this.handleSortByChange.bind(this, menuValue)} className={this.getSortByClass(menuValue)}>{menuValue}</a></Col>
        })
    }

    render(){
        return (
            <div>
                <Row>
                    {this.renderMenu()}
                </Row>
            </div>
        )        
    }
}

export default Menu