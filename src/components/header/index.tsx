import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import React from 'react';
import { Flower } from 'lucide-react';

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <header className={styles.header}>
            
                <nav>
                
                    <ul className={styles.navList}>
                        <Flower color="#ffffff"  size={50} strokeWidth={1}/>

                        <div className={styles.logo} onClick={() => navigate('/')}>
                            <div className={styles.text}>SofToy</div>
                        </div>
                        <li className={styles.navItem}>
                            <button onClick={() => navigate('/catalog')}>Каталог</button>
                        </li>
                        <li className={styles.navItem}>
                            <button onClick={() => navigate('/')}>Главная</button>
                        </li>
             
                        <li className={styles.navItem}>
                            <button>Контакты</button>
                        </li>

                    </ul>
                </nav>
            </header>
           
        </>
    );
};