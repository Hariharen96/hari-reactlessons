import React, { Component } from 'react'

class ReactSample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email : '',
             topic: ''
        }
    }

    componentWillMount(){
        alert('form starts')
    }

    componentDidMount(){
        this.handleSubmit = (e) => {
            e.preventDefault()
            alert(`my name is: ${this.state.name} nd email is: ${this.state.email} nd value: ${this.state.topic}`)
        }
        
    }
    shouldComponentUpdate(){
        this.handleSubmit = (e) => {
            e.preventDefault()
            alert('updated')
        }
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {JSON.stringify(this.state,undefined,2)}
                    <select value={this.state.topic} onChange={(e)=>this.setState({topic: e.target.value})}>
                        <option>aa</option>
                        <option>cc</option>
                        <option>bb</option>
                        
                    </select>
                    <input type="text" name="name" placeholder="enter text" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}  />
                    <input type="email" name="email" placeholder="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ReactSample
