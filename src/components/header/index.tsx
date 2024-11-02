import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import React from 'react';

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className={styles.gradientBar}></div>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navList}>
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