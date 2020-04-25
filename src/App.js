import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Shivam'
  const loading = true;
  if(loading){
    return <h1>Page Loading</h1>
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
