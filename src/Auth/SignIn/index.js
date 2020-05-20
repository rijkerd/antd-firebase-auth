import React, { useState } from 'react';
import PropTypes from 'proptypes';
import { Form, Input, Button, message } from 'antd';
import { useFirebase } from 'react-redux-firebase';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './styles.css';

const SignInForm = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const firebase = useFirebase();

  const signInUser = async ({ email, password }) => {
    try {
      await firebase.login({ email, password });
      setLoading(false);
      history.push('/app');
    } catch (e) {
      message.error(e.message);
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    setLoading(true);
    signInUser(values);
  };

  return (
    <div className="SignInForm">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        labelAlign="left"
      >
        <h2>Sign in to your Account</h2>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email address!' },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="johndoe@gmail.com"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="signIn-form-button"
            loading={loading}
          >
            Log in
          </Button>
          Or <Link to="/signup">register now!</Link>
          <Link to="/passwordreset" className="login-form-forgot">
            Forgot password?
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

SignInForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default SignInForm;
