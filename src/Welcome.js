import React, { Component } from 'react'
import './Welcome.css';
export class Welcome extends Component {

    constructor(){
        super()
        this.state ={
            message: 'Welcome to my webstite'
        }
    }

changeMessage(){
    this.setState({
        message: 'Thank your for subscribing'
    })
}

    render() {
        return (
            <div style={{color: this.props.color, textAlign:"center"}}>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Welcome
