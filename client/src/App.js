import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BASE_URL } from './index';

function App() {
  const [count, setCount] = React.useState(0)
  const [people, setPeople] = React.useState([])

 async function getPeople() {
   const res = await  fetch(`${BASE_URL}/?count=${count}`);
   const resData = await res.json()
   setPeople(resData.data)

  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>React & Node People Fetcher</h1>
          <input
            style={{
              fontsize: '2rem'
            }}
            onChange = {event => setCount(event.target.value)}
            placeholder='Number of People'
            type="number"
          />
          <button style={{
            fontsize: '2rem'
            }} onClick={getPeople}> Submit </button>
          {people.map(person => (
          <div key={person.email}
            style={{
              width: '100%',
              display: 'flex',
              marginTop: '.5em',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <img
            style={{
              borderRadius: '50%',
              height: '100%'
            }}
            src={person.picture.large}
            alt={person.name.first}
            />
            <div>
              <h3>{person.name.first}</h3>
              <p>{person.email}</p>
            </div>
          </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
