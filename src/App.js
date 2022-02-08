import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Project from './components/Project';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
 <Project/>

    </div>

    

    </Router>
  );
}

export default App;
