import React from 'react';

const Card = (props) => {
  return (
    <div className='cardMessage'>
      <span className='titleColor'>Titre</span>
      <p>{props.title}</p>
      <span className='titleColor'>Message</span>
      <ul>
        <li>{props.body}</li>
      </ul>
    </div>
  );
};

export default Card;
