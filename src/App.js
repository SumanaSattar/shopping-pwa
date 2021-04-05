import React from 'react';
import HomePage from './pages/homepage/HomePageComponenet'
import {Route , Switch} from 'react-router-dom'
 

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
    </Switch>
      
  );
}

export default App;
