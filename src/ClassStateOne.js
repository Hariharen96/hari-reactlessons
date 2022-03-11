import React, { Component } from 'react'

export class ClassStateOne extends Component {
    constructor(){
        super()
        this.state = {
                count: 0
            }
        }
    increment(){
      this.setState(prevState => ({
         count: prevState.count + 1
      }))
    }
    decrement(){
        this.setState(prevState => ({
            count: prevState.count-1
        }))
    }

    render() {
        return (
            <div>
                <h1>Class Component State</h1>
                <button onClick={()=>this.increment()}>Increment</button>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.decrement()}>Decrement</button>   
            </div>
        )
    }
}

export default ClassStateOne
