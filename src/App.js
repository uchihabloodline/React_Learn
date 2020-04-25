import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Shivam'
  return (
    <React.Fragment>
      <h1>Hi, this h1 is inside a fragment to avoid encapsulation.. </h1>
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
    </React.Fragment>
  );
}

export default App;
