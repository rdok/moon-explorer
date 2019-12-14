import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './User/User';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Moon explorer
            </a>
         </header>
         <User name="Neil Armstrong" birthyear="1930"></User>
      </div>
   );
}

export default App;
