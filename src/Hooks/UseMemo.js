import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    },[number]) 
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return (
        <div>
            <h1>UseMemo Hooks</h1>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
            <button onClick={()=> setDark(prevDark => !prevDark)}>ChangeTheme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num){
    console.log("calling slow func")
    for(let i=0;i<= 100000000000;i++){
        return num+2;
    }
}

export default UseMemo