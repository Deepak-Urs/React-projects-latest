import React, { useState, useEffect } from 'react'
import axios from 'axios'


function RestApiRequests() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // GET request
    getData()
  }, [])


  // POST, GET, PUT, DELETE
  const getData = () => {
    axios.get('https://63f00a8d4d5eb64db0d4ba1d.mockapi.io/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const postData = () => {
    // POST request
    axios.post('https://63f00a8d4d5eb64db0d4ba1d.mockapi.io/users', {
      name: name,
      age: 26,
      hobbies: ['Chess', 'Coding']
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateData = (id) => {
    // PUT request
    console.log(id);
    axios.put(`https://63f00a8d4d5eb64db0d4ba1d.mockapi.io/users/${id}`, {
      name: name,
      age: 27,
      hobbies: ['Chess', 'Coding', 'Cooking']
    }, id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteData = (id) => {
    // PUT Method
    console.log(id);
    axios.delete(`https://63f00a8d4d5eb64db0d4ba1d.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      RestApiRequests
      <button onClick={postData}>POST Data</button>
      <input placeholder='Name' onChange={(event) => setName(event.target.value)} />

      <div>
        {users.map((user) => {
          return (
            <>
              <h2>
                {`${user.id}. ${user.name}`}
              </h2>
              <button onClick={() => updateData(user.id)}>Update</button>
              <button onClick={() => deleteData(user.id)}>Delete</button>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default RestApiRequests
