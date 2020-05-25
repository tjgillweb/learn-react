import React from 'react'; 
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses =[];
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    const btnClass = [classes.Cockpit];
    if(props.showPersons){
        btnClass.push(classes.Red);
    }
    
    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>  
        <p className={assignedClasses.join(' ')}> This is really working! </p>  
        <button className={btnClass.join(' ')} onClick = {props.clicked} > Toggle Persons 
        </button>
        </div>
    )
     
}
export default cockpit;