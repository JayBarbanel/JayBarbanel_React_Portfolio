import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Logo from './components/Logo ';
import RecentWork from './components/RecentWork';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Commissioner from './components/Commissioner';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
 <Logo/>
<RecentWork/>
<Commissioner/>


<AboutMe/>

<Contact/>
    </div>

    

    </Router>
  );
}

export default App;
