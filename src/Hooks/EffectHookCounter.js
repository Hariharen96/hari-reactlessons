import React, { useEffect, useState } from 'react'

function EffectHookCounter() {
       const [count,setCount] = useState(0)

const tick = () => {
    setCount(count + 1)
}

       useEffect(() => {
           const interval = setInterval(tick,1000)
       },[count])
    return (
        <div>
            <h1>Hello</h1>
            <h1>{count}</h1>
        </div>
    )
}


export default EffectHookCounter
