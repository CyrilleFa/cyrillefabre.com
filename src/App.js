import './App.css';

import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
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
      <Homepage />
      <Switch>
        <Route path='/projects' component={Projects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
