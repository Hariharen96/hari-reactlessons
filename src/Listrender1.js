import React from 'react'
import PersonListrender1 from './PersonListrender1'

function Listrender1() {
    const person = [
        {
            id: 1,
            name: 'hari',
            age: 24,
            skill: 'React'
        },
        {
            id: 2,
            name: 'senthil',
            age: 25,
            skill: 'contractor'
        },
        {
            id: 3,
            name: 'ram babu',
            age: 25,
            skill: 'angular'
        }
    ]

    const personList = person.map((persons,index) => (
        <PersonListrender1 key= {persons.id} persons={persons} />
    ))
    return (
        <div>
            <h1>List render</h1>
{personList}
        </div>
    )
}

export default Listrender1
