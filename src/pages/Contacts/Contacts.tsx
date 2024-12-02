import React from "react";
import styles from './contacts.module.css';
import owl from '/images/owl1.png';

function Contacts() {
 return (
    <div>
        <div className={styles.mainSection}>
            <div className={styles.imageSection}>
                <img src={owl} className={styles.contactsImage}/>
            </div>
            <div className={styles.infoSection}>
                <p className={styles.name}>Контактная информация</p>
                <p className={styles.title}>Для заказа игрушек обращайтесь по телефону</p>
                <p className={styles.info}>+7 (915) 225 78 32</p>
                <p className={styles.title}>Идеи и предложения отправляйте на почту</p>
                <p className={styles.info}>ideas@softoy.ru</p>
                <p className={styles.title}>По вопросам трудоустройства</p>
                <p className={styles.info}>+7 (915) 588 99 32</p>
                <p className={styles.info}>work@softoy.ru</p>
            </div>

        </div>
        
        
    </div>
 );
}
export default Contacts;