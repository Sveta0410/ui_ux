import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import React from 'react';
import { Flower, Heart, ShoppingBag  } from 'lucide-react';

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerName}>
                    <Flower color="#ffffff"  size={50} strokeWidth={1}/>
                    <Link to="/" className={styles.headerTitle}>SofToy</Link>
                </div>
                <nav>
                
                    <ul className={styles.navList}>
                    

                    
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
                <div className={styles.headerIcons}>
                    <Heart className= {styles.headerIcon} color="#FFD7DE"  size={40} strokeWidth={1} />
                    <ShoppingBag className= {styles.headerIcon} color="#ffffff"  size={40} strokeWidth={1}/>
                </div>
            </header>
           
        </>
    );
};