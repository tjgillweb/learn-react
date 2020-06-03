import React, {
  Component
} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'; // not a component anymore, its a normal function now
import Aux from '../hoc/Auxiliary';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [{
        id: 'dsff',
        name: 'Max',
        age: '28'
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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0, 
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return {
      persons: updatedPersons, 
      changeCounter: prevState.changeCounter + 1  
      };
    });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            isAuthenticated ={this.state.authenticated} />
    }

    return ( 
        <Aux>
          <button onClick={() => {
            this.setState({showCockpit: false})
          }}>Remove Cockpit</button>
          { this.state.showCockpit ? (
          <Cockpit 
          title = {this.props.appTitle}
          showPersons = {this.state.showPersons}
          personsLength = {this.state.persons.length}
          clicked = {this.togglePersonsHandler}
          login = {this.loginHandler} 
          />
           ) : null }
          {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);