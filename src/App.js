import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [persons, setPersons] = useState([]);

  // Run this when our component mounts (we can see it on screen)
  useEffect(() => {
    (async () => {
      // Fetch all persons from backend
      setPersons(await(await fetch('/api/persons')).json());
    })();
  }, []);

  return (
    <div className="App">
      {persons.map(({id, firstName, lastName, email, birthDate}) => 
          <div key={id}>
            <h3>{firstName} {lastName}</h3>
            <p>Email: {email}</p>
            <p>Birth date: {birthDate}</p>
          </div>
        )}
    </div>
  );
}

export default App;
