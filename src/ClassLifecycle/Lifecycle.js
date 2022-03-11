import React from 'react';


class Lifecycle extends React.Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome',
            name: 'guys'
        }
    }

  

componentWillMount(){
    console.log("component will mount")
    console.log('*******************')
    alert('learn reactjs')
}
componentDidMount(){
    console.log("component did mount")
    console.log('*******************')
    setTimeout(() => {
        this.setState({message: "ThankYou"})
    },5000)
}
componentDidUpdate = () => {
    document.getElementById('myDiv').innerHTML = "New value updated successfully"+this.state.message;
}


greetMessage = () => {
    this.setState({
        message: "see you later"
    })
}
componentWillUpdate(){
    console.log("component will update")
    console.log("*****************")
    alert("do u want to update")
}

shouldComponentUpdate(){
return true
}

componentWillUnmount(){
    alert('header deleted')
}

headerDelete = () => {
    this.setState({
        message: false,name: false
    })
}
    render(){
        console.log("rendering")
        console.log("**************")
        return(
            <div>
                <h1>Lifecycle Methods</h1>
               <h1>{this.state.message} {this.state.name}</h1> 
               <button onClick = {this.greetMessage}>Click</button>
               <br />
               <button onClick={this.headerDelete}>HeaderDeleted</button>
            </div>
        )
    }
}


export default Lifecycle