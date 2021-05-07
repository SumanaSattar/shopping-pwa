import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom'
import HomePage from './pages/homepage/HomePageComponenet'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component';
import {auth} from './firebase/firebase.utils'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state={
      currentUser:null
    }
  }
    unsubscribeFromAuth = null;
    componentDidMount() {
      auth.onAuthStateChanged(user =>{
        this.setState({currentUser:user})
        console.log(this.state.currentUser);
      })
      console.log(this.state.currentUser);
    }
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
  
  render () {
    return (
      <div>
        <Header user={this.state.currentUser}/>
        <Switch>
           <Route exact path='/' component={HomePage}></Route>
           <Route  path='/shop' component={ShopPage}></Route>
           <Route  path='/signIn' component={SignInAndSignUp}></Route>
        </Switch>
      </div>
      
        
    );
  }
}

export default App;
