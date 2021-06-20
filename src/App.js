import './App.css';

import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <div id='outer-container' className='hidden'>
        <Sidebar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id='page-wrap'></div>
      </div>

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
