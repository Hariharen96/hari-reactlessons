import React, { useState } from 'react'

function UseState1() {
    const [name,setName] = useState('Hari')
    const [flag,setFlag] = useState(false)
    

    function changeName(){
        return setName('Baran')
    }

    function changeFlag(){
        return setFlag(!flag)
    }
    return (
        <div>
            <h1>UseState hooks</h1>
            <h1>Hello, {name}</h1>
            <button onClick={changeName}>Change</button>
            <br></br><br></br>
            <h1>Hello, {flag ? name : ""}</h1>
            <button onClick={changeFlag}>ChangeFlag</button>
        </div>
    )
}


export default UseState1
