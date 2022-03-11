import React from 'react'

function ChildMethodAsProps(props) {
    return (
        <div>
            <h1>Method as props  - child component</h1>
            <button onClick={()=> props.greetHandler("child")}>Click me</button>
        </div>
    )
}

export default ChildMethodAsProps
