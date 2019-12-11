import React, { Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch} from 'react-router-dom'

const HatsPage = () => {
  return(
    <h1>Hats Page</h1>
  );
}
class App extends Component {
  render(){
    return (
      <div>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
