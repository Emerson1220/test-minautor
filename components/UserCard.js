import React from 'react';

const UserCard = (props) => {
  return (
    <div className='usercard'>
      <h2 className='titleColor'>Profil</h2>
      <div>
        <span>Id user:</span>
        <p>{props.userId}</p>
      </div>
      <div>
        <span>Name user:</span>
        <p>{props.userName}</p>
      </div>

      <div className='content'>
        <h2>Messages</h2>
        <div>{props.posts}</div>
      </div>
    </div>
  );
};

export default UserCard;
