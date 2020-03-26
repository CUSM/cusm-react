import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
        <Index/>
        </Route>
        <Route path="/notes"> 

        </Route>
      </Switch>

    </Router>
  );
}

export default App;
