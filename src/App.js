import './App.css';

import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import SkillList from './components/SkillList';
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
        <Route exact path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route exact path='/skills' component={SkillList} />
        <Route exact path='/' component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
