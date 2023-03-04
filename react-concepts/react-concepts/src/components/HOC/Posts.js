import React from 'react'
import HOC from './HOC'

function Posts({ data }) {
  //const [posts, setPosts] = useState([]);

  //const getUsers = async () => {
  //  let posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //    .then((response) => {
  //      return response
  //    })
  //    .catch((err) => {
  //      return err;
  //    })

  //  setPosts(await posts.json());
  //}

  //useEffect(() => {
  //  getUsers();
  //})

  return (
    <div>
      <h2>
        HELLO from Posts!
      </h2>

      {data.slice(0,10).map((user) => {
        return <p key={user.name}>{user.title}</p>
      })}
    </div>
  )
}

const PostsComp = HOC("Posts", Posts, "posts")
export default PostsComp
