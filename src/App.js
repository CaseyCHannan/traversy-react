import React, { Component}  from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';


export class App extends Component {  
  
  render() { 
   
    
  return ( 
      <div>
      <nav className="navbar bg-primary">        
        <Navbar title=" Github Finder" />
        
      </nav>
      <h2>
      <Users />
      </h2>
      </div>
    );
  }
}

export default App;
