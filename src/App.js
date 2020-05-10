import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/Home'
import BrewSteps from './components/BrewSteps'
import { brews, initalBrew } from './brews.js'

const App = () => {
  const history = useHistory()
  const [brew, setBrew] = useState(initalBrew)

  const setCurrentBrew = selectedBrew => {
    // console.log(selectedBrew)
    brews.forEach(currentBrew => {
      if (currentBrew.name === selectedBrew) {
        setBrew(currentBrew)
      }
    })
  }

  const takeMeHome = () => {
    history.push('/')
  }

  return (
    <Switch>
      <Route path='/brew'>
        <BrewSteps
          brew={brew}
          history={history}
          takeMeHome={takeMeHome}
        />
      </Route>
      <Route path='/'>
        <Home
          history={history}
          setCurrentBrew={setCurrentBrew}
          brews={brews}
        />
      </Route>
    </Switch>
  )
}

export default App;
