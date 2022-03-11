import React, { Component } from 'react'




class ClassEventHand extends Component {
    handleClick(){
        console.log("clicked")
    }

    render() {
        return (
            <div>
                <h1>Class Event Handler</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default ClassEventHand
