import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // set state to get and set characters
  const [chars, setChars] = useState([])

  // make a (mock) api call to get characters data from link, then set characters to characters list
  useEffect(() => {
    const fetchChar = () => {
      axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log('data:', res.data[0].name);
        setChars(res.data);
      })
      .catch(err => {
        debugger
      })
    }
    fetchChar();
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        chars.map(char => {
          return <Character
          info={char}
          />
        })}
    </div>
  );
}

export default App;
