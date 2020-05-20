import React from 'react';
import PropTypes from 'proptypes';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Route, Redirect } from 'react-router-dom';
import { Spin } from 'antd';

import './styles.css';

export const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="example">
        <Spin tip="Loading" />
      </div>
    );
  return children;
};

export const SecureRoute = ({ Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }, // eslint-disable-line
            }}
          />
        )
      }
    />
  );
};

SecureRoute.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};
