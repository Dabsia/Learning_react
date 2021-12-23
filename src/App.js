import React, { Component } from 'react'; 
import './App.css';
import Contact from './components/Contact'
import Greeting from './components/Greeting'


class App extends Component {
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header">
        <Greeting 
        branding = 'Contact Manager'
        />
          <Contact 
          course = 'CSC' 
          phone = '07068914478'
           email = 'dabojohnson98@gmail.com' 
          name =  'Dabsia Johnson'
          />
          <Contact 
          course = 'Microbiology' 
          phone = '55-555-555-5'
           email = 'sandraOgun98@gmail.com' 
          name =  'Sandra Ogun Oseyili'
          />
        </header> 
      </div> 
    ); 
  } 
}
        

export default App;
