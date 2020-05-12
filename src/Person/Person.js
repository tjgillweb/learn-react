import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="person">
      <img src={props.imgUrl} alt="avatar"></img>
      <h1>{props.name}</h1>
      <p>{props.role}</p>
      <p>{props.children}</p>
      <div class="social">
        <i class="fab fa-dribbble"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
  );
};
export default person;