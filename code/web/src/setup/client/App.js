// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import Layout from '../../modules/common/Layout'
import NotFound from '../../modules/common/NotFound'
import RoutePrivate from '../../modules/auth/RoutePrivate'

// This is probably the top of the component tree. App is a functional component that renders 'Layout' tags with a switch inside of it. The second Route listed is probably for 404s

const App = () => (
  <Layout>
    <Switch>
      {Object.values(routes).map((route, index) => (
        // if route.auth(whatever that is) exists, go to next ternary
        // render this route
        // // this route has a ternary for it's path: if route.path is a function, invoke it, otherwise just go to whatever route.path is
        // I think route.path can either be a function or a string given this ternary. The function must return a string that determines the path? 
        route.auth
          ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}

      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
