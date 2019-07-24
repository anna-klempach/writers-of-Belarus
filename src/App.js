import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='' component={Main}/>
      </Switch>
      </div>
    )
  }
}

export default App;
