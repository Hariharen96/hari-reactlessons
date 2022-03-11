import React, { Component } from 'react'

class User extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
incrementCount = () =>{
    this.setState(prevCount => {
        return {count: prevCount.count + 1}
    })
}

    render() {
        return (
            <div>
                {this.props.name(true)}
            </div>
        )
    }
}

export default User
