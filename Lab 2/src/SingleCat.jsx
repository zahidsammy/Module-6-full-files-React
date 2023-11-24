import React from 'react';

const SingleCat = ({ id, name, latinName, image }) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>Latin Name: {latinName}</p>
      <img src={image} alt={`${name} - ${latinName}`} />
    </div>
  );
};

export default SingleCat;
