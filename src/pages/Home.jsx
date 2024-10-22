import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button} from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout; 


// import { Header } from './components/header';
// import { Button } from '../components/button';
// import { Box, Text, Button } from '@chakra-ui/react';

// const items = new Array(5).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

export const Home = () =>{
    return (
      
//       <div>
//         <Button className="home_button" type="link" href="/catalog" style={{ marginTop: 16 }} >
//                 Страница каталога
//          </Button>
//          <p></p>
//           <Button className="home_button"  type="link" href="/product" style={{ marginTop: 16 }} >
//                 Страница товара
//          </Button>
//
//       </div>
<>
       
    <Layout style={{ minHeight: '100vh', minWidth: '100vh',  background: 'transparent' }}t>
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
      <Content>
{/*         <Breadcrumb */}
{/*           style={{ */}
{/*             margin: '16px 0', */}
{/*           }} */}
{/*         > */}
{/*           <Breadcrumb.Item>Home</Breadcrumb.Item> */}
{/*           <Breadcrumb.Item>List</Breadcrumb.Item> */}
{/*           <Breadcrumb.Item>App</Breadcrumb.Item> */}
{/*         </Breadcrumb> */}

      </Content>
      <Footer
        style={{
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#5C8F62',
        }}
      >
        SofToy ©{new Date().getFullYear()} Created by Sveta
      </Footer>
    </Layout>
    </>
)}