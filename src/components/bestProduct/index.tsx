import styles from './bestProduct.module.css';
import React from 'react';


const bestProduct = ({ url, title }) => {
    return (
        <div className={styles.bestProduct}>
            <img src={url} className={styles.bestImage}/>
            <p className={styles.bestName}>{title}</p>
        </div>

    );
};

export default bestProduct;