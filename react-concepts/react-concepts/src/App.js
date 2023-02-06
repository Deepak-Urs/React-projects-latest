import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, []);

  const mapData = () => {

    // Map returns a new modified array
    //let mappedData = users.map(user => user.id * 2)
    //console.log(mappedData);

    console.log(users);

    let filteredData = users.filter((user) => {
      //return user.name = "Leanne Graham"
      return user.id <= 5
      //return user.name.toLowerCase().includes("a")
    })
    console.log(filteredData);

    setUsers(filteredData)
  }

  return (
    <div className='App'>
      <h1>Users</h1>
      <div className='card'>
        {
          users.map((user) => (
            <div key={user.id} style={{'border': '1px solid black', 'display': 'flex', 'width': '50%'}}>
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          ))
        }
      </div>
      <button onClick={mapData}>See Mapped Data</button>
    </div>
  )
}

export default App;
