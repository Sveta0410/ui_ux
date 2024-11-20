import { Link, useMatch, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import React from 'react';
import { Flower, Heart, ShoppingBag  } from 'lucide-react';

export const Header = () => {
    const navigate = useNavigate();
    const isActiveCatalog = useMatch('/catalog');
    const isActiveContacts = useMatch('/contacts');
    const isActiveHome = useMatch('/');

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
                            <button style={{background: isActiveCatalog ? '#bccfc6' : 'transparent'}} onClick={() => navigate('/catalog')}>Каталог</button>
                        </li>
                        <li className={styles.navItem}>
                            <button style={{background: isActiveHome ? '#bccfc6' : 'transparent'}} onClick={() => navigate('/')}>О нас</button>
                        </li>
                        <li className={styles.navItem}>
                            <button style={{background: isActiveContacts ? '#bccfc6' : 'transparent'}} onClick={() => navigate('/contacts')}>Контакты</button>
                        </li>

                    </ul>
                </nav>
                <div className={styles.headerIcons}>
                    <Heart className= {styles.headerIcon} opacity ={0} color="#FFD7DE"  size={40} strokeWidth={1} />
                    <ShoppingBag className= {styles.headerIcon} opacity ={0} color="#ffffff"  size={40} strokeWidth={1}/>
                </div>
            </header>
           
        </>
    );
};