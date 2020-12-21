import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() { 
        return(
        <div>
        <b>Store</b>
        { this.props.store.map(s => { return <Item item={s.item} price={s.price} discount={s.discount} />}) }
        </div>)
    }
}

export default Home