import React from 'react'

function PersonListrender1({persons}) {
    return (
        <div>
            <h1>I am {persons.name}</h1>
            <h1>My age is {persons.age}</h1>
            <h1>I am skilled in {persons.skill}</h1>
        </div>
    )
}

export default PersonListrender1
