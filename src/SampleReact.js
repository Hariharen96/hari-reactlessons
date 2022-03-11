import React from 'react'
import SampleReactApp from './SampleReact1'

function SampleReact(){
    const names = [
        {
            id: 1,
            name: 'hari'
        },
        {
            id: 2,
            name: 'ganesh'
        },
        {
            id: 3,
            name: 'lalitha'
        }
    ]

    const nameList = names.map(name => <SampleReactApp key={name.id} names = {name} />)
    return(
             <div>
                 {nameList}
             </div>
    )
    }

export default SampleReact
