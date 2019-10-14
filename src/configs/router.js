import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Load components page
import Login from '../pages/Login'
import Home from '../pages/Home2'
import PageNotFound from '../pages/PageNotFound'

const Router = () => {

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Login" component={Login} />
      <Route path="/Home" component={Home} />

      {/* Page Not Found */}
      <Route component={PageNotFound} />

    </Switch>
  )
}

export default Router