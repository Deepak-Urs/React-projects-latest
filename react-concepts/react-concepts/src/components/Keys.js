import React from 'react'

function Keys() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const details = [{
        name: 'A',
        age: 21,
    }, {
        name: 'B',
        age: 22,
    }, {
        name: 'C',
        age: 23,
    }, {
        name: 'D',
        age: 24,
    }]
    return (
        <div>
            <ul>
                {numbers.map(num => {
                    return <li key={num}>{num}</li>
                })}
            </ul>
            <ul>
                {details.map((detail, num) => {
                    return <li key={num}>{detail.number} - {detail.age}</li>
                })}
            </ul>
        </div>
    )
}

export default Keys
