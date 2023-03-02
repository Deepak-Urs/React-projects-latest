import React, { useState } from 'react'
import Home from './ContextAPI/Home'
import Profile from './ContextAPI/Profile'
import { UserData } from '../contexts/GlobalContexts';

function ContextAPI() {
  const [name, setName] = useState("Deepak");
  const [age, setAge] = useState(51);

  return (
    <UserData.Provider value={{name, setName, age}}>
      <Home name={name}/>
      <Profile setName={setName}/>
    </UserData.Provider>
  )
}

export default ContextAPI
