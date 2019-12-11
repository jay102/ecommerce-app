import React, { Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch} from 'react-router-dom';
import { auth} from './firebase/firebase.utils';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    }
  }
  unsubscribefromAuth = null
  componentDidMount(){
  this.unsubscribefromAuth =   auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribefromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
