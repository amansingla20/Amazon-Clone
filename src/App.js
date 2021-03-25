import './App.css';
import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path = '/checkout'>
          <Header/>
          <Checkout/>
        </Route>
          <Route path = '/dashboard'>
            <Header/>
            <Home/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
