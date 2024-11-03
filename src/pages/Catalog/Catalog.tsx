import { Button } from "antd";
import React from "react";
import styles from './catalog.module.css';
import { Link } from "react-router-dom";

function Catalog() {
    return (
        <div>
            <div className={styles.catalog}>
                <h1>Каталог</h1>
                <p><Link to="/product" >Товар</Link></p>
            </div>
       </div>
    );
   }
export default Catalog;