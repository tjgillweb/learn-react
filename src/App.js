import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      },
      {
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //DON'T DO THIS this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [{
          name: newName,
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ],
      //manually setting the otherState
      //otherState: personsState.otherState
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [{
          name: 'Max',
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person 
              name={person.name} 
              age={person.age} />
            })
          }
           
        </div>
      )
    }
    return ( 
      <div className = "App" >
      <h1> Hi, I 'm a React App</h1>  
      <p> This is really working! </p>  
      <button style = {style}
              onClick = {this.togglePersonsHandler} > Toggle Persons 
      </button>
      {persons}
      </div>
    );
  }
}

export default App;