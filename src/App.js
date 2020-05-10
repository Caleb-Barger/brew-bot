import React from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import BrewSteps from './components/BrewSteps'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentBrew: {
        name: "Caleb's Brew",
        steps: [
          {
            step1: "Wet the filter with the water"
          },
          {
            step2: "Brew the coffee :D"
          }
        ],
        indgridets: [
          "20g coffee",
          "500g water"
        ]
      }
    }
  }

  render(){
      return (
      <Switch>
        <Route path='/brew'>
          <BrewSteps currentBrew={this.state.currentBrew}/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    )
  }
}

export default App;
