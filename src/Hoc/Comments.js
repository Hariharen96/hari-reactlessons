import React, { Component } from 'react'
import Hoc from './Hoc'

class Comments extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Higher order components</h1>
                <h2>Comments: {this.props.countNumber}</h2>
                <button onClick={this.props.handleClick}>Like</button>
            </React.Fragment>
        )
    }
}

const EnhancedComments = Hoc(Comments,10)

export default EnhancedComments