import React, { Component } from 'react'

export class ClassState extends Component {
      constructor(){
          super()
          this.state = {
              message: "Welcome"
          }
      }
    onChange(){
          this.setState({
          message: "ThankYou"
      })
    }


    render() {
        return (
            <div>
                <h1>Class Component - State</h1>
                <h3>Hello, {this.state.message}</h3>
                <button onClick={()=>this.onChange()}>Click Me</button>
            </div>
        )
    }
}

export default ClassState
