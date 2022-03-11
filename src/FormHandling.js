import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            comments: '',
            topic: ''


        }
    }

    handleChangeUser = event => {
         this.setState({
             username: event.target.value
         })
    }

    handleChangeComments = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleChangeTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(` ${this.state.username} and ${this.state.comments} and ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
                <form onSubmit = {this.handleSubmit}>
              <div>
                <h1>Form Handling</h1>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleChangeUser} /> 
                <br />
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleChangeComments} />
                <br />
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleChangeTopic}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="Javascript">Javascript</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormHandling
