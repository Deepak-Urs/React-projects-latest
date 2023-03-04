import React from 'react'
import HOC from './HOC'

function Users({ data }) {
  //const [users, setUsers] = useState([]);

  //const getUsers = async () => {
  //  let users = await fetch(`https://jsonplaceholder.typicode.com/users`)
  //    .then((response) => {
  //      return response
  //    })
  //    .catch((err) => {
  //      return err;
  //    })

  //  setUsers(await users.json());
  //}

  //useEffect(() => {
  //  getUsers();
  //})

  return (
    <div>
      <h2>
        HELLO from Users!
      </h2>

      {data.slice(0, 10).map((user) => {
        return <p key={user.name}>{user.name}</p>
      })}
    </div>
  )
}

const UserComp = HOC("Users", Users, "users")
export default UserComp;
