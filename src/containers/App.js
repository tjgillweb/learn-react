import React, {
  Component
} from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';


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
    const btnClass = [classes.Button];
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
      btnClass.push(classes.Red);
    }

    const assignedClasses =[];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return ( 
        <div className = {classes.App} >
        <h1> Hi, I 'm a React App</h1>  
        <p className={assignedClasses.join(' ')}> This is really working! </p>  
        <button className={btnClass.join(' ')} onClick = {this.togglePersonsHandler} > Toggle Persons 
        </button>
        {persons}
        </div>
    );
  }
}

export default App;