import React from 'react';
import {Route , Switch} from 'react-router-dom'

import HomePage from './pages/homepage/HomePageComponenet'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' component={HomePage}></Route>
         <Route  path='/shop' component={ShopPage}></Route>
         <Route  path='/signIn' component={SignInAndSignUp}></Route>
      </Switch>
    </div>
    
      
  );
}

export default App;
