import React from 'react'

function DestructingProps({name,Designation}) {
    return (
        <div>
            <h1>Destructing Props</h1>
            <h2>I am: {name}</h2>
            <h2>My designation is: {Designation}</h2>
        </div>
    )
}

export default DestructingProps
