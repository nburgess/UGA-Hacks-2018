import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './pages/Overlay/Header';
import Home from './pages/Home/Home';
import Two from './pages/Two/Two';
import Test from './services/ZomatoFetch';
import Locate from './services/geoLocation';

class App extends Component {
  constructor(){
    super();
    this.MyRoute = ({ component: WrappedComponent, ...rest }) => (
      <Route
        {...rest}
        render={(props) => (<WrappedComponent {...props} />
      )}
      />
    );
  }
  render() {
    const App = () => (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/form' component={Two}/>
          <Route path='/test' component={Test}/>
          <Route path='/locate' component={Locate}/>
        </Switch>
      </div>
    )

    return (
        <Switch>
          <App />
        </Switch>
    );
  }
}

export default App;
