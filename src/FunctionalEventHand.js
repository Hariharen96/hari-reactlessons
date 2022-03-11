import React from 'react'

function handleChange(){
    console.log("clicked")
}


function FunctionalEventHand() {
    return (
        <div>
            <h1>Functional Event Handler</h1>
            <button onClick={handleChange}>Click Me</button>
        </div>
    )
}

export default FunctionalEventHand;