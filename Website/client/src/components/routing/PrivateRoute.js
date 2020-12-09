import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Private route that takes in route information and only gives access if user is authenticated
// Will load and go to the passed in component *'{...props}'* if authenticated, otherwise will be
// redirected to the login page
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {};

// Use mapStateToProps when we want to pull a value from the state, in this case updating auth
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// Need to export connect with the component itself
// export default connect()(PrivateRoute);

// First parameter is any state that you want to map, second is an object with any actions you want to use with this component
export default connect(mapStateToProps)(PrivateRoute);
