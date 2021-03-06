import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import UserCard from '../components/UserCard';
import Card from '../components/Card';

const url = `https://jsonplaceholder.typicode.com`;
const fetchAxiosData = (path) =>
  axios
    .get(`${url}/${path}`)
    .then(({ data }) => data)
    .catch((response) => Promise.reject(response));

export default function Home(props) {
  //State
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  //Get Users
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const [users, posts] = await Promise.all([
          fetchAxiosData('users'),
          fetchAxiosData('posts'),
        ]);

        setError(null);
        setData(
          users.map((user) => ({
            ...user,
            posts: posts.filter(({ userId }) => userId === user.id),
          }))
        );
      } catch (err) {
        setError(err);
      }
      setIsFetching(false);
    };

    fetchData();
  }, []);

  if (isFetching) return <span>Loading..</span>;
  if (error) return <h1>Error!</h1>;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <h1>Test</h1>

        <div className='displayFlex'>
          {data.map((user) => (
            <UserCard
              key={user.id}
              userId={user.id}
              userName={user.name}
              posts={user.posts.map(({ title, body, id }) => (
                <Card key={id} title={title} body={body} />
              ))}
            />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
