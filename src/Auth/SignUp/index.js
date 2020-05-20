import React from 'react';
import PropTypes from 'proptypes';
import { Form, Input, Select, Button, message } from 'antd';
import { useFirebase } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import './styles.css';

const SignUpForm = ({ history }) => {
  const firebase = useFirebase();

  const createUser = async (values) => {
    const { username, email, password, prefix, phone } = values;
    try {
      const phoneNumber = `${prefix}${phone}`;
      await firebase.createUser(
        {
          email,
          password,
        },
        { email, username, phoneNumber }
      );
      message.success('User created successfully');
      history.push('/app');
    } catch (e) {
      message.error(`Error creating user ${e.message}`);
    }
  };

  const onFinish = (values) => {
    createUser(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Select.Option value="255">+255</Select.Option>
        <Select.Option value="254">+254</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="SignUpForm">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        autoComplete={false}
        layout="vertical"
        initialValues={{ prefix: '255' }}
      >
        <h2>Create a new Account</h2>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input placeholder="johndoe" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email address!' },
          ]}
        >
          <Input type="email" placeholder="johndoe@gmail.com" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password type="password" placeholder="********" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
            type="tel"
            minLength={9}
            maxLength={10}
            placeholder="785999232"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="signUp-form-button"
          >
            Create Account
          </Button>

          <Link to="/" style={{ float: 'left', fontSize: '16px' }}>
            Back to SignIn?
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

SignUpForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default SignUpForm;
