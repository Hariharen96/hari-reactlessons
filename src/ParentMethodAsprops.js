import React from 'react';
import ChildMethodAsProps from './ChildMethodAsProps';


class ParentMethod extends React.Component{
    constructor(){
        super()
        this.state = {
            parentName: "parent"
        }
        this.greetMessage = this.greetMessage.bind(this)
    }


    greetMessage(childName){
        alert(`Hello, ${this.state.parentName} from ${childName}`)
    }


    render(){
        return(
            <div>
            <h1>Method as Props - Parent Component</h1>
            <ChildMethodAsProps greetHandler = {this.greetMessage} />
            </div>
        )
    }
}


export default ParentMethod