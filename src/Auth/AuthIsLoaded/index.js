import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { Spin } from 'antd';

import './styles.css';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="custom-spin">
        <Spin tip="Loading" />
      </div>
    );
  return children;
};

export default AuthIsLoaded;
