import React, { Component } from 'react'

class ConditionalRender2 extends Component {
    constructor(){
        super()
        this.state={
            login: false
        }
    }
    render() {

        return (
            <div>
         this.state.login ?( <div>Hai hari</div>) : (<div>Bye hari</div>)       
            </div>
        )
    }
}

export default ConditionalRender2
