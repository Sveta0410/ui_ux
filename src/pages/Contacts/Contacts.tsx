import React from "react";
import styles from './contacts.module.css';

function Contacts() {
 return (
    <div>
        <div className={styles.mainSection}>
            <p className={styles.name}>Контактная информация</p>
            <p className={styles.title}>По общим вопросам обращайтесь по телефону</p>
            <p className={styles.info}>+7 (915) 225 78 32</p>
            <p className={styles.title}>Идеи и предложения отправляйте на почту</p>
            <p className={styles.info}>ideas@softoy.ru</p>
            <p className={styles.title}>По вопросам трудоустройства</p>
            <p className={styles.info}>+7 (915) 588 99 32</p>
            <p className={styles.info}>work@softoy.ru</p>
        </div>
    </div>
 );
}
export default Contacts;