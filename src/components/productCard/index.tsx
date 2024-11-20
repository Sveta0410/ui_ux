import { ShoppingCart } from 'lucide-react';
import styles from './productCard.module.css';
import React from 'react';
import { Link } from 'react-router-dom';



const ProductCard = ({ id, image, price, title}) => (
    <div className={styles.productRectangle} onClick={event =>  window.location.href=`/product/${id}`}>
        <img src={image} alt="toy" className={styles.image}/>
        <div className={styles.priceAndBuy}>
            <p className={styles.price}>{price} ₽</p>
            <button>
                <ShoppingCart color="#5c8f62" size={25} strokeWidth={1.7}/>
            </button>
        </div>
        <p className={styles.title}>{title}</p>
    </div>
);

export default ProductCard;
