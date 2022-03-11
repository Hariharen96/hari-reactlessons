import React, { Component } from 'react'

class BindingEventHandle extends Component {
    constructor(){
        super()
        this.state = {
            name: "Hari"
        }
        // this.changeState = this.changeState.bind(this)
    }


    changeState = () =>{
        this.setState({
            name: "Baran"
        })
    }
    render() {
        return (
            <div>
                <h1>Binding Event Handlers</h1>
                <h2>{this.state.name}</h2>
                {/* <button onClick={this.changeState.bind(this)}>Click Me</button> */}
                {/* <button onClick={()=>this.changeState()}>Click Me</button> */}
                <button onClick={this.changeState}>Click Me</button>
            </div>
        )
    }
}

export default BindingEventHandle
