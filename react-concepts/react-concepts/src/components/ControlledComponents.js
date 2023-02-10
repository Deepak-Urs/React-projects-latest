import React from 'react'

function ControlledComponents() {
    let name = React.createRef()
    let age = React.createRef()

    const submit = () => {
        console.log(name.current.value)
        console.log(age.current.value)
    }

    const getValue = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <div>
                {/* uncontrolled components */}
                {/*<input placeholder='name' ref={name} />
                <input placeholder='age' ref={age} />*/}

                <input placeholder='name' onChange={getValue}/>
                <input placeholder='age' onChange={getValue}/>
            </div>
            <div><button onClick={submit}>Submit</button></div>
        </div>
    )
}

export default ControlledComponents
