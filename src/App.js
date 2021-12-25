import React, { Component } from 'react'; 
import './App.css';
import Contact from './components/Contact';
import Greeting from './components/Greeting';
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
            <Contact 
            course = 'Computer Science' 
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
            <Contact 
            course = 'Banking and Finance' 
            phone = '44-444-4444-4'
            email = 'preciousfelix98@gmail.com' 
            name =  'Precious Henry Felix'
            />
            </div>
            
        </header> 
      </div> 
    ); 
  } 
}
        

export default App;
