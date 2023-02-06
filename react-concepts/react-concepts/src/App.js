import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, []);

  const mapData = () => {

    // Map returns a new modified array
    //let mappedData = users.map(user => user.id * 2)
    //console.log(mappedData);

    // filter returns selected detail objects based on conditions
    //let filteredData = users.filter((user) => {
    //  return user.id <= 5
    //  //return user.name = "Leanne Graham"
    //  //return user.name.toLowerCase().includes("a")
    //})

    //console.log(filteredData);
    //setUsers(filteredData)

    let square = numbers.map((number) => {
      return number * number
    })
    console.log(square);

    // combination of map and filter together
    let sqNosGT5 = numbers.filter((num) => {
      return num >= 5
    }).map((sqNum) => sqNum * sqNum)
    setNumbers(sqNosGT5)
  }

  return (
    <div className='App'>
      <h1>Users</h1>
      <div className='card'>
        {/*{
          users.map((user) => (
            <div key={user.id} style={{'border': '1px solid black', 'display': 'flex', 'width': '50%'}}>
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          ))
        }*/}
        {
          numbers.map((number) => (
            <div key={number} style={{'border': '1px solid black', 'display': 'flex', 'width': '50%'}}>
              <p>{number}</p>
            </div>
          ))
        }
      </div>
      <button onClick={mapData}>See Mapped Data</button>
    </div>
  )
}

export default App;
