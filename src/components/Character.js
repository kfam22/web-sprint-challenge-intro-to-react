// Write your Character component here
import React from 'react';


export default function Character(props) {
    const { info, id } = props;
    console.log(` ${info.name} id:`, id);
    return (
        <div>
            <h2>{info.name}</h2>
            {/* <button>
                
            </button> */}
        </div>
    )
}
