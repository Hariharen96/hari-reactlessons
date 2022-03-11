import React, { useState } from 'react'
import Useeffect from './Useeffect'

function MouseReturn() {

    const [display,setDisplay] = useState(true)

    function toggleClick(){
        return setDisplay(!display)
    }
    return (
        <div>
            <button onClick = {toggleClick}>Toggle</button>
            {display && <Useeffect />}
        </div>
    )
}


export default MouseReturn