import React from 'react';

function Hero(props) {
  return (
      <div>
          <h3>{props.alias}</h3>
          <p>First Name is {props.first}</p>
          <p>Last Name is {props.last}</p>
          <p>Comic is {props.comic}</p>
      </div>
  )
}

export default Hero;
