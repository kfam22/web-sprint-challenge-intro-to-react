// Write your Character component here
import React from 'react';
// import Details from './Details';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    font-family: 'Orbitron', sans-serif;
    /* border: 2px solid red; */
    border-radius: 8px;
    box-shadow: 5px 5px 15px red;
    width: 40%;
    background-color: #d8d9dc;
    color: #41484e;
    margin: 3%;
`


export default function Character(props) {
    const { info, id, action, currentCharId, closeDetails } = props;
    console.log(` ${info.name} id:`, id);
    return (
        <StyledCharacter>
            <h2>{info.name}</h2>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Hair color: {info.hair_color}</p>
            <p>Eye color: {info.eye_color} </p>
            {/* <button onClick={() => {
                action(id);
            }}>
                &#9660;
            </button>
            {
            currentCharId === id && <Details charId={currentCharId} close={closeDetails} />} */}
        </StyledCharacter>
    )
}
