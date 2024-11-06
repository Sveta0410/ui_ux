import React from "react";
import styles from './home.module.css';
import mainToy from '/src/assets/doll.jpg';
import BestProduct from "../../components/bestProduct";
import { BestProducts } from "../../consts/bestProducts";

function Home() {
 return (
    <div>
        <div className={styles.mainSection}>
            <p className={styles.name}>SofToy</p>
            <img src={mainToy} alt="MainToy" className={styles.mainImage}></img>
        </div>
        <div className={styles.bestSection}>
            <div className={styles.bestHeaderBlock}>
                <p  className={styles.bestHeader}>Лучшие товары</p>
            </div>
            <div className={styles.bestProducts}>
                {BestProducts.map((product) => (
                    <BestProduct
                        key={product.id}
                        url={product.url}
                        title={product.title}
                    />
                    ))}
            </div>
        </div>
    </div>
 );
}
export default Home;