import React, { Component } from 'react'

class NormalPureComponent extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    changeIncrement = () =>{
        this.setState({ count: 0 }) 
    }


    render() {
        console.log("Normal component render")
        return (
            <div>
                <h1>Normal-Pure Component</h1> <br />
                {this.state.count}
                <button onClick={this.changeIncrement}>Increment</button>
            </div>
        )
    }
}

export default NormalPureComponent
