import React from "react";
import styles from './home.module.css';
import mainToy from '/src/assets/doll.jpg';
import frogBest from '/src/assets/bestToys/frogBest.svg';
import bunnyBest from '/src/assets/bestToys/bunnyBest.svg';
import smallBunnyBest from '/src/assets/bestToys/smallBunnyBest.svg';

function Home() {
 return (
    <div>
        <div className={styles.mainSection}>
            <p className={styles.name}>SofToy</p>
            <img src={mainToy} alt="MainToy" className={styles.mainImage}></img>
        </div>
        <div className={styles.bestHeader}>

        </div>
        <img src={frogBest} alt="MainToy" className={styles.mainImage}></img>
        <img src={bunnyBest} alt="MainToy" className={styles.mainImage}></img>
        <img src={smallBunnyBest} alt="MainToy" className={styles.mainImage}></img>
    </div>
 );
}
export default Home;