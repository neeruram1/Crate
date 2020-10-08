// Imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// App Imports
import { routes } from '../../setup/routes';
import Layout from '../../modules/common/Layout';
import NotFound from '../../modules/common/NotFound';
import RoutePrivate from '../../modules/auth/RoutePrivate';

/*
This is where the application starts. 
The first Layout is found in src/common and is the basic setup with a header component and then children
Then the route in the switch is made by mapping over the routes file and taking each export to create a given route
We will need to create a route for our new page in the routes folder mimicking crate.js
*/
const App = () => (
  <Layout>
    <Switch>
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}

      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
