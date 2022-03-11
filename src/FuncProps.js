import React from 'react'

function FuncProps(props) {
    return (
        <div>
            <h1>Paasing props via functional component</h1>
            <h1>My name is : {props.name}</h1>
            <h1>My id is: {props.id}</h1>
        </div>
    )
}

export default FuncProps;