import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import BrewSteps from './components/BrewSteps'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "I AM STATE"
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/brew'>
          <BrewSteps currentBrew={this.state.currentBrew} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    )
  }
}

export default App;
