// Write your Character component here
import React from 'react';
import Details from './Details';


export default function Character(props) {
    const { info, id, action, currentCharId, closeDetails } = props;
    console.log(` ${info.name} id:`, id);
    return (
        <div>
            <h2>{info.name}</h2>
            <button onClick={() => {
                action(id);
            }}>
                &#9660;
            </button>
            {
            currentCharId === id && <Details charId={currentCharId} close={closeDetails} />}
        </div>
    )
}
