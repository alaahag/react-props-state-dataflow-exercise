import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    render() {
        return <div> {this.state.show? "now you see me" : "Now you don't"} </div>

    }
}

export default Hudini