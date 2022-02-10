import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import RecentWork from './components/RecentWork';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Commissioner, {CarouselItem}  from './components/Commissioner';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
 <Logo/>
<RecentWork/>
<Commissioner>
  <CarouselItem>Item 1</CarouselItem>
  <CarouselItem>Item 2</CarouselItem>
  <CarouselItem>Item 3</CarouselItem>
</Commissioner>


<AboutMe/>

<Contact/>
    </div>

    

    </Router>
  );
}

export default App;
