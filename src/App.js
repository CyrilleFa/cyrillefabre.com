import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={Projects} />
      </Switch>
      <Footer />
      <div id='outer-container' className='hidden'>
        <Sidebar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id='page-wrap'>
          <h1>blabla</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
