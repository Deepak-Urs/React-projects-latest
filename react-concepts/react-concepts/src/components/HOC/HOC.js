import React, { useEffect, useState } from 'react'
//import Users from './Users'
//import Posts from './Posts'

export default function HOC(title, Component, request) {
  //might have to go inside hoc() - toggle
  const [data, setData] = useState([]);

  const getData = async () => {
    let data = await fetch(`https://jsonplaceholder.typicode.com/${request}`)
      .then((response) => {
        return response
      })
      .catch((err) => {
        return err;
      })

    setData(await data.json());
  }

  useEffect(() => {
    getData();
  })
  //the above might have to go inside hoc() - toggle

  return function hoc() {
    return (
      <div>
        <h2>{title}</h2>

        <Component data={data}/>
      </div>);
  }
}

//export default HOC
