import React from "react";

import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from "../../utils/fake-login";

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps =>
      isLoggedIn() ? (
        <Component {...routeProps} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              previousPath: routeProps.location
            }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
