import React from 'react'

function Props({ valueOfProp, changeName }) {

  return (
    <div>
      <h1>Props - {valueOfProp} </h1>
      {/* using child components to send data to parent */}
      <button onClick={() => changeName('Hi, this is Deepak')}>Change Name</button>
    </div>
  )
}

export default Props
