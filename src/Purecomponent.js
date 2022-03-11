import React from 'react';


class Purecomponent extends React.PureComponent{
constructor(){
    super()
    this.state = {
        count: 0
    }
}

changeIncrement = () =>{
  this.setState({count: this.state.count+1})
}

    render(){
        console.log("pure component renders")
        return(
              <div>
                  <h1>Pure Component</h1>
                  {this.state.count}
                  <button onClick={this.changeIncrement}>Increment</button>
              </div>
        )
    }
}


export default Purecomponent