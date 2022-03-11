import React, { useState } from 'react'

function Usestate() {
    let initialState = 0
    const [count,setCount] = useState(initialState)
    const [name,setName] = useState({firstName: '',lastName: ''})
    const [items,setItems] = useState([])

function incrementCount(){
    setCount(count +1)
}
function addItem() {
    setItems([...items,{
        id: items.length,
        value: Math.floor(Math.random() * 10) +1
    }])
}
    return (
        <div>
            <h1>UseState-Hook</h1>
            <h1>{count}</h1>
            <button onClick={incrementCount}>increment</button>
            <br />
            <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <br/>
            <form>
                <input type="text" value={name.firstName} onChange={(e)=>setName({...name, firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange={(e)=>setName({...name, lastName: e.target.value})} />
                <h2>your firstname is - {name.firstName}</h2>
                <h2>your lastname is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>

            <button onClick={addItem}>Add</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Usestate
