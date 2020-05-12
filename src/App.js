import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
       <Person
          name="Tim Lee"
          role="Front-end Developer"
          imgUrl="https://i.postimg.cc/kgktft18/man-1.png"
        />
       <Person
          name="Matt Adams"
          role="Full Stack Developer"
          imgUrl="https://i.postimg.cc/wT1X2HqC/man.png"
        >Hobbies: Gaming </Person>
       <Person
          name="Casey Wilson"
          role="UI/UX Designer"
          imgUrl="https://i.postimg.cc/GtVsV8LZ/girl-1.png"
        />
    </div>
  );
  // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'This is a React App rendered using createElement'));
}

export default App;
