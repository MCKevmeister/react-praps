## React 

# useEffect() hook

Hooks allow you to use state and other React features without writing a class.

The purpose of this hook is to run the defined function after rendering or when a certain action occurs.

It adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

import React, {useState, useEffect} from 'react';
function App() {
    //Define State
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
   
    //Call the use effect hook
    useEffect(() => {
      setName({firstName: 'Shedrack', surname: 'Akintayo'})
      setTitle(['My Full Name']) //Set Title
    }, [])// pass in an empty array as a second argument
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surname}</h3>
        </div>
    );
};
export default App