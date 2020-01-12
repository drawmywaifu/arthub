import React from 'react';
import Home from './Home'
import UserProfile from './UserProfile'

import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path ="/home">
            <Home 
            />
          </Route>
          <Route path ="/profile">
            <UserProfile/>
          </Route>
          <Route path ="/">
            <Home 
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
