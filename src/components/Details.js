import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details(props) {
    const { charId, close } = props;


    const [details, setDetails] = useState(null)

    useEffect(() => {
    axios.get(`http://swapi.dev/api/people/${charId}`)
        .then(res => { 
            console.log('details data:', res.data)
            setDetails(res.data) 
            console.log('set details', details)
        })
        .catch(err => { debugger }) // eslint-disable-line
    }, [charId])

    return (
        <div className='container'>
          {
            details &&
            <>
              <p>Height: {details.height}</p>
              <p>Mass: {details.mass}</p>
              <p>Hair color: {details.hair_color}</p>
              <p>Eye color: {details.eye_color} </p>
              
            </>
          }
          <button onClick={close}>&#9650;</button>
        </div>
      )
    }
    