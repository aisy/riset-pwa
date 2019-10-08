import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Load components page
import Login from '../pages/Login'
import Home from '../pages/Home'

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/Home" component={Home} />
    </Switch>
  )
}

export default Router