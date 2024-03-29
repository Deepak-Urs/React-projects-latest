//import { useEffect, useState } from 'react'

//import States from './components/States';
//import StatesClassBased from './components/StatesClassBased';

//import Props from './components/Props'
//import Keys from './components/Keys'
//import Forms from './components/Forms'
//import DynamicInputs from './components/DynamicInputs'
//import ControlledComponents from './components/ControlledComponents';
//import InnerHTML from './components/InnerHTML';
//import Fragments from './components/Fragments';
//import StatelessFull from './components/StatelessFull';
//import RestApiRequests from './components/RestApiRequests';
//import Debouncing from './components/Debouncing';
//import ContextAPI from './components/ContextAPI';
//import ClassNames from './components/ClassNames/ClassNames';
//import LazyLoading from "./components/LazyLoading";

//import HOC from './components/HOC/HOC';
//import Users from './components/HOC/Users'
//import Posts from './components/HOC/Posts'

//import { useEffect } from "react";
//import { getUsers } from "./components/helpers/getAllUsers"
//import { addNums, multiply } from "./components/helpers/addTwo"
import Family from "./components/recursion/Family";
import familyTree from "./data.js"


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

  //const getUsersHelper = async () => {
  //  let data = await getUsers(`users`);
  //  console.log('res seen', data);
  //};

  //const addTwoNumsHelper = () => {
  //  let sum = addNums(2,3);
  //  let product = multiply(2,3)
  //  console.log(sum)
  //  console.log(product)
  //}
  
  //useEffect(() => {
  //  getUsersHelper();
  //}, []);

  return (
    <div className='App'>
      <div className='card'>

        {/* HOC */}
        {/*<HOC />*/}
        {/*<Users />
        <hr />
        <Posts />*/}

        {/* Recursion */}
        Recursion
        <Family familyTree={familyTree} />
        {/* Helper functions */}
        {/*Helper functions
        <button onClick={addTwoNumsHelper}>Add</button>*/}

        
        {/* LazyLoading */}
        {/*<LazyLoading />*/}

        {/* ClassNames */}
        {/*<ClassNames />*/}

        {/* ContextAPI */}
        {/*<ContextAPI />*/}

        {/* Debouncing */}
        {/*<Debouncing />*/}

        {/* REST API Requests */}
        {/*<RestApiRequests />*/}

        {/* StatelessFull */}
        {/*<StatelessFull />*/}

        {/* Fragments */}
        {/*<Fragments />*/}

        {/* INNER HTML */}
        {/*<InnerHTML />*/}

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
      {/*<Keys />*/}

      {/* Forms */}
      {/*<Forms />*/}

      {/* dynamic inputs */}
      {/*<DynamicInputs />*/}

      {/*ControlledComponents*/}
      {/*<ControlledComponents />*/}
    </div>
  )
}

export default App;
