import { Button } from "antd";
import React from "react";
import styles from './catalog.module.css';
import toy_0 from '/src/assets/doll.jpg';
import { Link } from "react-router-dom";

function Catalog() {
    return (
        <div>
            <div className={styles.catalog}>
                <div className={styles.filtersRectangle}>
                    <div className={styles.filtersNameRectangle}>
                        <p className={styles.filterMain}>Фильтры</p>
                    </div>

                </div>

                <div className={styles.productRectangle}>
                    <img src={toy_0} alt="toy" className={styles.image}></img>
                    <p className={styles.price}>2500 ₽</p>
                    <Link to="/product" className={styles.description} >Кукла Розалин</Link>
                </div>
                <div className={styles.productRectangle}>
                    <img src={toy_0} alt="toy" className={styles.image}></img>
                    <p className={styles.price}>2500 ₽</p>
                    <Link to="/product" className={styles.description} >Кукла Розалин</Link>
                </div>
                <div className={styles.productRectangle}>
                    <img src={toy_0} alt="toy" className={styles.image}></img>
                    <p className={styles.price}>2500 ₽</p>
                    <Link to="/product" className={styles.description} >Кукла Розалин</Link>
                </div>
                <div className={styles.productRectangle}>
                    <img src={toy_0} alt="toy" className={styles.image}></img>
                    <p className={styles.price}>2500 ₽</p>
                    <Link to="/product" className={styles.description} >Кукла Розалин</Link>
                </div>
            </div>
       </div>
    );
   }
export default Catalog;