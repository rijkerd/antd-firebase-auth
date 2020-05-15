import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './styles.css';

const SignInForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
          name="Email"
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

export default SignInForm;
