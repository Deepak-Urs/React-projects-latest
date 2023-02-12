import React, { useState } from 'react'

function StatelessFull() {
    const [name, setName] = useState("Name")
    return (
        <div>
            {name}
        </div>
    )
}

export default StatelessFull

// stateless --> no states
// stateful--> with states, example - useState usage

//NOTE: before 16.8 ==> we had to use class based components for stateful,
//                      , but now we have hooks in functional components 