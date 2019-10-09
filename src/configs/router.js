import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Load components page
import Login from '../pages/Login'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Home" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Router