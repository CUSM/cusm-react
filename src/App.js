import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Index from './pages/Index';
import Notes from './pages/Notes';
import Feedback from './pages/Feedback'
import Upload from './pages/Upload'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Index/>
        </Route>
        <Route path="/notes"> 
        <Notes/>
        </Route>
        <Route path="/feedback">
        <Feedback/>
        </Route>
        <Route path="/upload">
          <Upload/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
