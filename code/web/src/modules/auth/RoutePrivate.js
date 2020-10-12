// Imports
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// App Imports
import userRoutes from "../../setup/routes/user";

// Component
const RoutePrivate = (props) =>
  props.user.isAuthenticated ? (
    props.role ? (
      props.user.details.role === props.role ? (
        <Route {...props} component={props.component} />
      ) : (
        <Redirect to={userRoutes.login.path} />
      )
    ) : (
      <Route {...props} component={props.component} />
    )
  ) : (
    <Redirect to={userRoutes.login.path} />
  );

// Component Properties
RoutePrivate.propTypes = {
  user: PropTypes.object.isRequired,
};

// Component State
function routePrivateState(state) {
  return {
    user: state.user,
  };
}

export default connect(routePrivateState, {})(RoutePrivate);

// this is where the app determines which route to display
// our route will be in this route, since it's associated to a user

/*
* if props.user.isAuthenticated & props.role exists & props.user.details.role === props.role
      go to route and render component
    but if props.user.details.role !== props.role
      redirect to userRoutes.login.path
* if props.user.isAuthenticated & props.role does not exist
      render component and route
* if !props.user.isAuthenticated 
      redirect to userRoutes.login.path
*/
