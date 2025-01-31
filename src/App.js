import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';


const StyledAppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-image: url('./images/star-wars-backgrounds-16.jpg');
`

const App = () => {
  // set state to get and set characters
  const [chars, setChars] = useState([]);
  // set state for selected char id: for experimenting with buttons
  // const [currentCharId, setCurrentCharId] = useState(null);

  // const openDetails = id => {
  //   setCurrentCharId(id)
  // }

  // const closeDetails = () => {
  //   setCurrentCharId(null)
  // }

  // make a (mock) api call to get characters data from link, then set characters to characters list
  useEffect(() => {
    const fetchChar = () => {
      axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log('data:', res.data);
        setChars(res.data);
      })
      .catch(err => {
        console.error(err)
      })
    }
    fetchChar();
  }, [])
  

  return (
    <div className="App">
      <h1 className="Header">React Wars: Choose Your Fighter</h1>
      <StyledAppContainer>
      {
        chars.map((char, idx) => {
          return <Character
          info={char}
          key={idx + 1}
          id={idx + 1}
          // action={openDetails}
          // currentCharId={currentCharId}
          // closeDetails={closeDetails}
          />
        })}
      </StyledAppContainer>
        
    </div>
  );
}

export default App;
