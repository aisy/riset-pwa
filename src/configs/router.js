import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Load components page
import Home from '../pages/Home'

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Home" component={Home} />
    </Switch>
  )
}

export default Router