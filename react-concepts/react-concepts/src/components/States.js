import { useState } from 'react'


export default function States() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false)
    //const [array, setArray] = useState([
    //    {
    //        name: 'A',
    //        age: 1
    //    },
    //    {
    //        name: 'B',
    //        age: 2
    //    },
    //    {
    //        name: 'C',
    //        age: 3
    //    },
    //])
    //const [object, setObject] = useState(
    //    {
    //        name: 'A',
    //        age: 1
    //    })

    const increment = () => {
        setCount(count + 1)
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <h1>{count}</h1>
            {isVisible ? (<h2>Visible</h2>) : (<h2>Not Visible</h2>)}
            <button onClick={increment}>Increment the count</button>
        </div>
    )
}
