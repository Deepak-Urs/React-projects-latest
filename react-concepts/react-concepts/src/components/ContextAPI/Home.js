import React from 'react'
import { useContext } from 'react'
import { UserData } from '../../contexts/GlobalContexts'
import Settings from './Settings'

function Home() {
    let {name} = useContext(UserData)
    return (
        <div>
            The name is {name}
            <Settings name={name} />
        </div>
    )
}

export default Home
