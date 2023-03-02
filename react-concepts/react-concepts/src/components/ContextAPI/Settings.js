import React from 'react'
import { useContext } from 'react'
import { UserData } from '../../contexts/GlobalContexts'

function Settings() {
    let { name, age } = useContext(UserData)
    return (
        <div>
            <h1>{name}-S</h1>
            <h1>{age}-S</h1>
        </div>
    )
}

export default Settings
