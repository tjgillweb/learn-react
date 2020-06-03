import React, {useEffect, useRef} from 'react'; 
import classes from './Cockpit.module.css';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //Http request...
      // setTimeout(() => {
      //   alert('Saved data to cloud');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []); // or pass an empty array if you want to run it once

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    })

    const assignedClasses =[];
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
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
        <button ref={toggleBtnRef } className={btnClass.join(' ')} onClick = {props.clicked} > Toggle Persons 
        </button>
        <button onClick={props.login}>Login</button>
        </div>
    )
     
}
export default React.memo(Cockpit);