//import { useEffect, useState } from 'react'

//import States from './components/States';
//import StatesClassBased from './components/StatesClassBased';

//import Props from './components/Props'
import Keys from './components/Keys'

function App() {
  //let age = 26
  //let name = "Deepaks"
  // MAP DEMO
  //const [users, setUsers] = useState([]);

  //useEffect(() => {
  //  fetch("https://jsonplaceholder.typicode.com/users")
  //    .then((response) => response.json())
  //    //.then((json) => setUsers(json))
  //}, []);

  //const mapData = () => {
  //  // Map returns a new modified array
  //  //let mappedData = users.map(user => user.id * 2)
  //  //console.log(mappedData);

  //  // filter returns selected detail objects based on conditions
  //  //let filteredData = users.filter((user) => {
  //  //  return user.id <= 5
  //  //  //return user.name = "Leanne Graham"
  //  //  //return user.name.toLowerCase().includes("a")
  //  //})

  //  //console.log(filteredData);
  //  //setUsers(filteredData)

  //  let square = numbers.map((number) => {
  //    return number * number
  //  })
  //  console.log(square);

  //  // combination of map and filter together
  //  let sqNosGT5 = numbers.filter((num) => {
  //    return num >= 5
  //  }).map((sqNum) => sqNum * sqNum)
  //  setNumbers(sqNosGT5)
  //}

  // PROPS Demo
  //const [name, setName] = useState("Deepak")
  //const changeName = (value) => {
  //  setName(value)
  //}

  //useEffect(() => {
  //  let age = 25;
  //  let name = "Deepaks"

  //  //if (age > 26) {
  //  //  console.log('Age is 26');
  //  //}

  // inline conditional experessions and ternary operator
  //  age > 26 ? console.log('Age is more than 26') : 
  //  name === "Deepak" && age === 26 ? 
  //  (<>{console.log('Name is Deepak')} {console.log('Age is 26')}</>) : (<>{console.log('I am less than 26')} {console.log('Name is not Deepak')}</>)
  //})

  // EVENT HANDLING
  //const addNums = (num1, num2) => {
  //  console.log(num1+num2);
  //}

  //const getInput = (event) => {
  //  console.log(event.target.name);
  //}

  return (
    <div className='App'>
      <div className='card'>

        {/*EVENT HANDLING*/}
        {/*<input name='input' placeholder='Add somthing..' onChange={getInput}/>
        <button onClick={() => addNums(2, 3)}>Add Numbers</button>*/}

        {/* MAP and STATES DEMO */}
        {/*<h1>Users</h1>*/}
        {/*{
          users.map((user) => (
            <div key={user.id} style={{'border': '1px solid black', 'display': 'flex', 'width': '50%'}}>
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          ))
        }*/}
        {/*{
          numbers.map((number) => (
            <div key={number} style={{'border': '1px solid black', 'display': 'flex', 'width': '50%'}}>
              <p>{number}</p>
            </div>
          ))
        }*/}
        {/*<button onClick={mapData}>See Mapped Data</button>*/}
      </div>

      {/*<States />*/}
      {/*<StatesClassBased />*/}

      {/*<Props valueOfProp={name} changeName={changeName} />*/}

      {/* inline conditional experessions and ternary operator */}
      {/*{
        age > 26 ? (<h1>'Age is more than 26'</h1>) : 
        name === "Deepak" && age === 26 ? 
        (<h1>Name is Deepak and Age is 26'</h1>) : (<h1>I am less than 26 Name is not Deepak</h1>)
      }*/}

      {/* Keys */}
      <Keys />
    </div>
  )
}

export default App;
