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
    <span  style={{position:"sticky",top:'50%',left:'0%',height:'50px',width:'50px'}}><button>ContactMe</button></span>
    
      <header className="App-header">   
      <img src="./banner.jpg" alt="" width="70%" height="70%"/>
      </header>
      <hr></hr>
      <div style={{display: 'flex', flexDirection: 'row',justifyContent:"space-between",padding:'10%'}}>
        <ShortProfile></ShortProfile>
        <Summary></Summary>
      </div>
      <hr></hr>
      <Experience></Experience>
      <Projects></Projects>
     
   <footer>
    <Contact></Contact>
    </footer>
    </div>
  );
}

export default App;