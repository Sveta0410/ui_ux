import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Button, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
export const Header_1 = () => {
const navigate = useNavigate();
  return (
    <Layout style={{  minWidth: '100vh',  background: 'transparent' }}t>
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#5C8F62',
        width: '100vw'
      }}
    >
      <Menu
//           theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
//           items={items}
        style={{
          flex: 1,
          minWidth: 0,
          backgroundColor: '#5C8F62',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Menu.Item key="1" style={{ color: 'white' }}>
            <a href="/catalog" style={{ color: 'white' }}>Каталог</a>
        </Menu.Item>
        <Menu.Item key="2" style={{ color: 'white' }}>О нас</Menu.Item>
        <Menu.Item key="3" style={{ color: 'white' }}>Контакты</Menu.Item>
      </Menu>
    </Header>
    
  </Layout>
  );
};