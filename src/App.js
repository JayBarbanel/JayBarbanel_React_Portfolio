import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import RecentWork from './components/RecentWork';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Commissioner from './components/Commissioner';
import Warzone from './components/Warzone';
import MusicianDB from './components/MusicianDB';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
 <Logo/>
<RecentWork/>
<Commissioner/>
<Warzone/>
<MusicianDB/>


<AboutMe/>

<Contact/>
    </div>

    

    </Router>
  );
}

export default App;
