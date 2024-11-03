import { Link, useNavigate } from 'react-router-dom';
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
                    
                        <div className={styles.headerName}>
                            <Flower color="#ffffff"  size={50} strokeWidth={1}/>
                            <Link to="/" className={styles.headerTitle}>SofToy</Link>
                        </div>
                    
                        <li className={styles.navItem}>
                            <button onClick={() => navigate('/catalog')}>Каталог</button>
                        </li>
                        <li className={styles.navItem}>
                            <button onClick={() => navigate('/')}>О нас</button>
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