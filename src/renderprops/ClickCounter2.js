import React from 'react';


class ClickCounter extends React.Component{
    render(){
        const {count,incrementCount} = this.props
        return(
            <div>
                <h1>Render props</h1>
                <button onClick={incrementCount}>clicked {count} times</button>
            </div>
        )
    }
}


export default ClickCounter