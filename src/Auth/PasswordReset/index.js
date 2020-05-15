import React from 'react';
import { Input, Form, Button } from 'antd';
import { Link } from 'react-router-dom';

import './styles.css';

const PasswordReset = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="PasswordResetForm">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        labelAlign="left"
        layout="vertical"
      >
        <h3>Reset your Password</h3>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email address!' },
          ]}
        >
          <Input type="email" placeholder="johndoe@gmail.com" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="passwordReset-form-button"
          >
            Send Reset Email
          </Button>

          <Link to="/" style={{ float: 'left', fontSize: '16px' }}>
            Back to SignIn
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PasswordReset;
