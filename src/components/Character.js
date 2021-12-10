// Write your Character component here
import React from 'react';


export default function Character(props) {
    const { info } = props;
    return (
        <div>
            <h2>{info.name}</h2>
        </div>
    )
}
