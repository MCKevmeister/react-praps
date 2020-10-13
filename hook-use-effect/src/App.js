import React, {useState, useEffect} from 'react';
function App() {
    //Define State
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
   
    //Call the use effect hook
    useEffect(() => {
      setName({firstName: 'Prapti', surname: 'Mane'})
      setTitle({'My Full Name'}) //Set Title
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
