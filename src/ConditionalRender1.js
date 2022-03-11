import React, { Component } from 'react'

class ConditionalRender1 extends Component {
    constructor(){
        super()
        this.state = {
            isLogin: false
        }
    }
    render() {
        let message
        if(this.state.isLogin){
            message = "Welcome"
        }else{
            message = "Thankyou"
        }
        return (
            <div>
                   {message}          
            </div>
        )
    }
}

export default ConditionalRender1
