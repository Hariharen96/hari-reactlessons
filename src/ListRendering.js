import React from 'react'

function ListRendering() {
    const names = ['Hari','baran','Lalitha']
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
           <h1>List Render</h1>
           {nameList}
        </div>
    )
}


export default ListRendering

