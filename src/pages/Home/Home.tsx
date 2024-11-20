import React from "react";
import styles from './home.module.css';
import mainToy from '/src/assets/doll.jpg';
import aboutUsToy from '/images/bestToys/smallBunnyBest.svg';
import BestProduct from "../../components/bestProduct";
import { BestProducts } from "../../consts/bestProducts";
import { AboutUsText } from "../../consts/aboutUs";

function Home() {
 return (
    <div>
        <div className={styles.mainSection}>
            <p className={styles.name}>SofToy</p>
            <img src={mainToy} alt="MainToy" className={styles.mainImage}/>
        </div>
        <div className={styles.bestSection}>
            <div className={styles.bestHeaderBlock}>
                <p  className={styles.homeHeader}>Лучшие товары</p>
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
        <div className={styles.aboutUsSection}>
            <img src={aboutUsToy} className={styles.aboutUsImage}/>
            <div className={styles.aboutUsTextSection}>
                <div className={styles.aboutHeaderBlock}>
                    <p className={styles.homeHeader}>О нас</p>
                </div>
                <div className={styles.aboutTextBlock}>
                    <p className={styles.homeText}>{AboutUsText}</p>
                </div>
            </div>
        </div>
    </div>
 );
}
export default Home;