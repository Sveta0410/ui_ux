import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import React from 'react';
import { Flower } from 'lucide-react';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>
                    <div className={styles.footerColumns}>
                        <div className={styles.footerColumn}>
                            <p><Link to="/" className={styles.footerLink}>О нас</Link></p>
                            <p><Link to="/contacts" className={styles.footerLink}>Контакты</Link></p>
                        </div>
                    </div>
                </div>
                <Flower color="#ffffff"  size={50} strokeWidth={1}/>
                <div className={styles.footerName}>
                            <Link to="/" className={styles.footerTitle}>SofToy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;