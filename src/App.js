import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import SignInForm from './Auth/SignIn';
import SignUpForm from './Auth/SignUp';
import PasswordResetForm from './Auth/PasswordReset';
import BaseLayout from './Layout/index';

import { store, rrfProps } from './Store/index';
import AuthIsLoaded from './Auth/AuthIsLoaded';
import SecureRoute from './Auth/SecureRoute';

/* configure global spin indicator */
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: 24 }} spin />);

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <HashRouter hashType="hashbang" history={history}>
            <Switch>
              <Route exact path="/" component={SignInForm} />
              <Route exact path="/signup" component={SignUpForm} />
              <Route path="/passwordreset" component={PasswordResetForm} />
              <SecureRoute path="/app" Component={BaseLayout} />
            </Switch>
          </HashRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
