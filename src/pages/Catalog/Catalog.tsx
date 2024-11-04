import { Button } from "antd";
import React from "react";
import styles from './catalog.module.css';
import toy_0 from '/src/assets/doll.jpg';
import { Link } from "react-router-dom";

function Catalog() {
    return (
        <div>
            <div className={styles.catalog}>
                <h1>Каталог</h1>
                <p><Link to="/product" >Товар</Link></p>
                <div className={styles.rectangle}>
                <img src={toy_0} alt="toy" className={styles.image}></img>
                <p className={styles.price}>2500 ₽</p>
                <p className={styles.description}>Кукла Розалин</p>
            </div>
            <div className={styles.rectangle}>
                <img src={toy_0} alt="toy" className={styles.image}></img>
                <p className={styles.price}>2500 ₽</p>
                <p className={styles.description}>Кукла Розалин</p>
            </div>
            <div className={styles.rectangle}>
                <img src={toy_0} alt="toy" className={styles.image}></img>
                <p className={styles.price}>2500 ₽</p>
                <p className={styles.description}>Кукла Розалин</p>
            </div>
            <div className={styles.rectangle}>
                <img src={toy_0} alt="toy" className={styles.image}></img>
                <p className={styles.price}>2500 ₽</p>
                <p className={styles.description}>Кукла Розалин</p>
            </div>
            </div>
            
       </div>
    );
   }
export default Catalog;