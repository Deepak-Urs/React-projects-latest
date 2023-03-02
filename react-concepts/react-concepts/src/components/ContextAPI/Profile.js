import React from 'react'
import { useContext } from 'react'
import { UserData } from '../../contexts/GlobalContexts'

function Profile() {
    let { setName } = useContext(UserData)
    return (
        <h1>
            <button onClick={() => setName("Urs")}>Click here</button>
        </h1>
    )
}

export default Profile
