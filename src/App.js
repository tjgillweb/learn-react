import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{
        id: 'dsff',
        name: 'Max',
        age: 28
      },
      {
        id: 'fsfs',
        name: 'Manu',
        age: 29
      },
      {
        id: 'fsdf',
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Use Object.assign or spread operator to make a copy of the object 
    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    } 

    person.name = event.target.value;
    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person;

    this.setState({persons: updatedPersons});
  }

  deletePersonHandler = (personIndex) => {
    //DONT USE THIS: it mutates the state 
    //const updatedPersons = this.state.persons; 

    //USE either slice() or ES6 spread operator: updates the state immutably
    //const updatedPersons = this.state.persons.slice();
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(personIndex, 1);
    this.setState({persons: updatedPersons});
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }
  render() {
    const myStyle = {
      backgroundColor: 'green',
      color: 'white',
      fontSize: '16px',
      border: '1px solid green',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
              click= {() => this.deletePersonHandler(index)}
              name= {person.name} 
              age= {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
           
        </div>
      )
      myStyle.backgroundColor = 'red';
      myStyle.border = '1px solid red';
      myStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes =[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    return ( 
        <div className = "App" >
        <h1> Hi, I 'm a React App</h1>  
        <p className={classes.join(' ')}> This is really working! </p>  
        <button style={myStyle} onClick = {this.togglePersonsHandler} > Toggle Persons 
        </button>
        {persons}
        </div>
    );
  }
}

export default App;