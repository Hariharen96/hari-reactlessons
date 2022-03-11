import React, { Component } from 'react'

class ReactSample2 extends Component {
    render() {
        const { student } = this.props
        return (
            <div>
                {student}
            </div>
        )
    }
}

export default ReactSample2
