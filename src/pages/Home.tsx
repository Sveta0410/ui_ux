import React from "react";
import { Col, Flex, Image, Space, Typography  } from 'antd';
const { Title } = Typography;

function Home() {
 return (
    /* <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '75vh'}}> */
    <div >
        {/* <Space align="center"> */}
        <Flex gap="middle" justify='space-around' align='center'>
        <Col span={32}></Col>
        <Title style = {{fontFamily: 'Montez', color:'white', fontSize: '85px'}}>SoftToy</Title>
        <Col span={32}></Col>
        <Image
            width={400}
            style = {{borderRadius: '30px'}}
            src="/doll.jpg"
        />
        <Col span={32}></Col>
  </Flex>
  <h1></h1>
  <p>, </p>
  <p></p>
  <p>, </p>
  <p></p>
  <p> .</p>
  <p></p>
  {/* </Space> */}
    </div>
 );
}
export default Home;