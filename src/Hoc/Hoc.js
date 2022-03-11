import React from 'react'

const Hoc = (Component,data) => {
    return class extends React.Component{
        constructor(){
            super()
            this.state = {
                count: data
            }
        }
    
        handleClick = () =>{
            this.setState({count: this.state.count +1})
        }
        render(){
            return(
            <React.Fragment>
                <h1>Hello, <Component countNumber={this.state.count} handleClick = {this.handleClick} /> </h1>
            </React.Fragment>
            )
        }
    }
}

export default Hoc