import React, { Component } from 'react';

class Item extends Component {
    render() {
        return <div>{this.props.item}: ${this.props.price}, discount: {this.props.discount}, total price after discount: ${this.props.price * this.props.discount}</div>;

    }
}

export default Item