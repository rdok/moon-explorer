import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './User/User';

class App extends Component {
   state = {
      users: [
         { name: "Neil Armstrong", birthyear: "1930" },
         {
            name: "Buzz Aldrin",
            birthyear: "1930",
            about: "An american engineer and formatl astronaut." 
         }
      ]
   }

   render() {
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

            {this.state.users.map((user, key) => (
               <User name={user.name} birthyear={user.birthyear}>
                  {user.about}
               </User>
            ))}
         </div>
      );
   }
}

export default App;
