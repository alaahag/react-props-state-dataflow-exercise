import React, { Component } from 'react';
import Item from './Item';

class Landing extends Component {
    /* your code here */


    render() {
        return  <div>Welcome, {this.props.user}. The hottest item is {this.props.hottest.item} for ${this.props.hottest.price}</div> 

    }
}

export default Landing