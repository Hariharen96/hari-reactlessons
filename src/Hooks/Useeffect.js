import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    function changeCount(){
        return setCount(count + 1)
    }

    useEffect(() => {
        console.log("document title updated")
        document.title = `You clicked ${count} times`
    },[count])

const logPosition = e => {
    console.log("mouse move")
    setX(e.clientX)
    setY(e.clientY)
}

    useEffect(() => {
        console.log("useeffect called")
        window.addEventListener("mousemove",logPosition)

        return () => {
            console.log("component unmounted")
            window.removeEventListener('mousemove',logPosition)
        }
    },[])

    return (
        <div>
            <h1>UseEffect Hooks</h1>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={changeCount}>ChangeCount {count}</button>

            <h1>Hooks X - {x} Y - {y}</h1>
        </div>
    )
}



export default Useeffect