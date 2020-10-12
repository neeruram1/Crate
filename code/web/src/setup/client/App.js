// Imports
import React from "react";
import { Route, Switch } from "react-router-dom";

// App Imports
import { routes } from "../../setup/routes";
import Layout from "../../modules/common/Layout";
import NotFound from "../../modules/common/NotFound";
import RoutePrivate from "../../modules/auth/RoutePrivate";

const App = () => (
  <Layout>
    <Switch>
      {Object.values(routes).map((route, index) =>
        route.auth ? (
          <RoutePrivate
            {...route}
            key={index}
            path={typeof route.path === "function" ? route.path() : route.path}
          />
        ) : (
          <Route
            {...route}
            key={index}
            path={typeof route.path === "function" ? route.path() : route.path}
          />
        )
      )}

      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;

// where routes are created? Passed into? Not 100% sure here
// how is importing just routes? that's a directory

// line 6 is default importing index.js
// rout.auth is what determines if it's a personal user's page accessing it
// not 100% sure what route.path() does over route.path but I don't think it effects what we're doing
// This Switch seems like it needs specific true false values in order to function right

// Biggest question is how is the route object being determined, in the reducer? might be a change in props
// still not 100% sure how it's determining which of many routes to display
// believe it's most likely through state
