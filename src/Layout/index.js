import React from 'react';
import PropTypes from 'proptypes';
import { Layout, Menu } from 'antd';
import { useFirebase } from 'react-redux-firebase';

import './styles.css';

const { Header, Content, Footer, Sider } = Layout;

const BaseLayout = ({ history }) => {
  const firebase = useFirebase();
  const logOut = async () => {
    await firebase.logout();
    history.push('/');
  };
  const onClickMenu = ({ key }) => {
    if (key === '1') {
      logOut();
    }
  };
  return (
    <Layout className="BaseLayout">
      <Header className="BaseLayoutHeader">
        <Menu mode="horizontal" onClick={onClickMenu}>
          <Menu.Item style={{ float: 'right' }} key="1">
            Logout
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider className="BaseLayoutSlider">Sider</Sider>
        <Content className="BaseLayoutContent">Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

BaseLayout.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default BaseLayout;
