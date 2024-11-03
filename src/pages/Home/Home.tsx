import React from "react";
import { Col, Flex, Image, Space, Typography  } from 'antd';
const { Title } = Typography;
import styles from './home.module.css';
import mainToy from '/src/assets/doll.jpg';

function Home() {
 return (
    <div >
        <div className={styles.mainSection}>
            <p className={styles.name}>SofToy</p>
            <img src={mainToy} alt="MainToy" className={styles.mainImage}></img>
        </div>
    </div>
 );
}
export default Home;