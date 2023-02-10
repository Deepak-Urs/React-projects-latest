import React, { useState } from 'react'

function DynamicInputs() {
    const [inputs, setInputs] = useState({})
    const getInputValues = (data) => {
        let {name, value} = data.target
        let input = {[name]: value}
        setInputs({ ...inputs, ...input})
    }
    console.log(inputs);

    return (
        <div>
            <div className='input-container'>
                <input placeholder='Name' name="name" onChange={getInputValues} />
                <input placeholder='Age' name="age" onChange={getInputValues} />
                <input placeholder='YOE' name="yoe" onChange={getInputValues} />
            </div>
            <button>Add new group</button>
        </div>
    )
}

export default DynamicInputs
