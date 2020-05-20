import React, { useState } from 'react';
import PropTypes from 'proptypes';
import { Input, Form, Button, message } from 'antd';
import { useFirebase } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import './styles.css';

const PasswordReset = ({ history }) => {
  const firebase = useFirebase();
  const [loading, setLoading] = useState(false);
  const resetEmail = async ({ email }) => {
    try {
      await firebase.resetPassword(email);
      history.push('/');
    } catch (e) {
      message.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    setLoading(true);
    resetEmail(values);
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
          name="email"
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
            loading={loading}
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

PasswordReset.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default PasswordReset;
