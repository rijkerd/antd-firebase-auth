import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history';
import SignInForm from './Auth/SignIn';
import SignUpForm from './Auth/SignUp';
import PasswordResetForm from './Auth/PasswordReset';

/* configure global spin indicator */
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: 24 }} spin />);

const history = createBrowserHistory();

const App = () => {
  return (
    <HashRouter hashType="hashbang" history={history}>
      <Switch>
        <Route exact path="/" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route path="/passwordreset" component={PasswordResetForm} />
      </Switch>
    </HashRouter>
  );
};

export default App;
