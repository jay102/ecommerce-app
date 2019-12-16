import React, { Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch} from 'react-router-dom';
import { auth,createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions';


class App extends Component {
  unsubscribefromAuth = null
  componentDidMount(){
    const {setCurrentUser } = this.props
  this.unsubscribefromAuth =   auth.onAuthStateChanged(async userAuth => {
    
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        setCurrentUser({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        })
        console.log(this.state);
      });
    }
      setCurrentUser({userAuth})
    })
  }
  componentWillUnmount(){
    this.unsubscribefromAuth()
  }
  render(){
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(null,mapDispatchToProps)(App);
