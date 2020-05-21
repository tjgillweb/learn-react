import React from 'react';
import styled from 'styled-components';	
import './Person.css';

const StyledDiv = styled.div`
  background: #fefefe;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(188, 177, 178, 0.6);
  height: auto;
  padding: 20px;
  text-align: center;
  display: block;
  margin: 20px auto;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;