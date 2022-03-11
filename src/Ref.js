import React from 'react';

class Reference extends React.Component{
    constructor(){
        super()
        this.inputRef = React.createRef();
    }

componentDidMount(){
  this.inputRef.current.focus();
  this.inputRef.current.placeholder = 'placeholder value'
}


onChange = () => {
    console.log(this.inputRef.current.value)
}



    render(){
        return(
            <div>
                <h1>Reference</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.onChange}>Submit</button>
            </div>
        )
    }
}


export default Reference