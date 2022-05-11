import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com`;

    axios
      .get(`${url}/posts`)
      .then((response) => setPosts(response.data));
  }, []);

  console.log(posts);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>contenu</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UserTable;
