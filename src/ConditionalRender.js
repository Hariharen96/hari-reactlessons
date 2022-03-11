import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(){
        super()
        this.state = {
            isLogin : true
        }
    }
    render() {
        if(this.state.isLogin){
        return (
            <div>
                <h1>Hello Hari</h1>
            </div>
        )
        }else{
            return(
<div>
    <h1>Hello Baran</h1>
</div>
            )
        }
    }
}

export default ConditionalRender
