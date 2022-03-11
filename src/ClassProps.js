import React, { Component } from 'react'

export class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Passing props using class component</h1>
                <h3>Name: {this.props.name}</h3>
                <h3>Designation: {this.props.Designation}</h3>
                <h3>Id: {this.props.id}</h3>
            </div>
        )
    }
}

export default ClassProps
