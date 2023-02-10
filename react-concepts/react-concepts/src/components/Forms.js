import React, { useState } from 'react'

function Forms() {
    const [objData, setObjData] = useState({})

    const getInputs = (value, name) => {
        let data = { [name]: value }
        setObjData({ ...objData, ...data })
    }

    const submitData = (event) => {
        event.preventDefault();
        console.log(objData);
    }

    return (
        <div>
            <form onSubmit={submitData}>
                <input type='text' name='name' placeholder='Write your name...' onChange={(event) => getInputs(event.target.value, event.target.name)} />
                <input type='number' name='age' placeholder='Write your age' onChange={(event) => getInputs(event.target.value, event.target.name)} />
                <input type='text' name='hobbies' placeholder='Write your hobbies' onChange={(event) => getInputs(event.target.value, event.target.name)} />
                <input type='date' name='date' placeholder='Write a date...' onChange={(event) => getInputs(event.target.value, event.target.name)} />
                <div><button type='submit'>Submit</button></div>
            </form>
        </div>
    )
}

export default Forms
