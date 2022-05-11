import React, { FunctionComponent, useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com`;
    axios
      .get(`${url}/users`)
      .then((response) => setUsers(response.data));
  }, []);

  console.log(users);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UserTable;
