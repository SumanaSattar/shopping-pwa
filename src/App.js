import React from 'react';
import HomePage from './pages/homepage/HomePageComponenet'
import ShopPage from './pages/shop/shop.component'
import {Route , Switch} from 'react-router-dom'
 

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route  path='/shops' component={ShopPage}></Route>
    </Switch>
      
  );
}

export default App;
