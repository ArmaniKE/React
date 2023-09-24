import React, { useState, useEffect } from 'react';
import './App.css';

const Artist = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Album: {props.album}</h2>
      <img src={props.img} alt="img" />
    </>
  );
}

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);

  return (
    <div className="App">
      <Artist 
        name={"Travis Scott"} 
        album={"Utopia"} 
        img={'https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ_400x400.jpg'} 
      /><br></br>
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevCount => prevCount - 1)}>-</button>
    </div>
  );
}

export default App;
