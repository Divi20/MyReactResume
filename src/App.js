import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog'
import Contact from './components/Contact'
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Summary from './components/Summary';
//import { Navbar, NavbarBrand } from 'reactstrap';
import ShortProfile from './components/ShortProfile';
//import {Container,Row,Col} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
    
      <header className="App-header">   
      <div style={{display: 'flex', flexDirection: 'row',justifyContent:"right"}}>
      
      <div style={{display: 'flex', flexDirection: 'col',justifyContent:"center"}}>
      <ShortProfile></ShortProfile>
      
      </div>
      
      <Summary></Summary>
      
      </div>
      </header>
    
      
     
      
      
      
      
      
      <Projects></Projects>
     
     
      <div>
      
      <Blog></Blog>
      <Skills></Skills>
      <Experience></Experience>
      
     </div>
     <Hobbies></Hobbies>
    <footer><h6>Made by Divyangi Singh</h6>
    <Contact></Contact>
    </footer>
    </div>
  );
}

export default App;