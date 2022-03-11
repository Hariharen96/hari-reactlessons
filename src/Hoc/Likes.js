import React, { Component } from 'react'
import Hoc from './Hoc'

class Likes extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Higher order components</h1>
                <h2>Likes: {this.props.countNumber}</h2>
                <button onClick={this.props.handleClick}>Like</button>
            </React.Fragment>
        )
    }
}

const EnhancedLikes = Hoc(Likes,5)

export default EnhancedLikes
