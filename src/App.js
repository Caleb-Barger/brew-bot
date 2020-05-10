import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/Home'
import BrewSteps from './components/BrewSteps'

const brews = [
  {
    name: "firstBrew",
    steps: [
      "Pour some water",
      "sift for the bigest beeenz"
    ]
  },
  {
    name: "secondBrew",
    steps: [
      "Pour some water",
      "sift for the smallets beeenz"
    ]
  },

]

const App = () => {
  const history = useHistory()
  const [brew, setBrew] = useState({})

  const setCurrentBrew = selectedBrew => {
    // console.log(selectedBrew)
    brews.forEach(currentBrew => {
      if (currentBrew.name === selectedBrew) {
        setBrew(currentBrew)
      }
    })


  }

  return (
    <Switch>
      <Route path='/brew'>
        <BrewSteps brew={brew} />
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
