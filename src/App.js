import React, { Component } from 'react'; 
import './App.css';
import Greeting from './components/Greeting';
import Contacts from './components/Contacts';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


class App extends Component {
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header">
          
        <Greeting 
        branding = 'Contact Manager'
        />
          <div class = 'container'>
          <Contacts/> 
            </div>
        </header> 
      </div> 
    ); 
  } 
}
        

export default App;
