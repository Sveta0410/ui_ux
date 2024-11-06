import { ShoppingCart } from 'lucide-react';
import styles from './productCard.module.css';
import React from 'react';
import { Link } from 'react-router-dom';



const ProductCard = ({ id, image, price, title}) => (
    <div className={styles.productRectangle}>
        <img src={image} alt="toy" className={styles.image}></img>
        <div className={styles.priceAndBuy}>
            <p className={styles.price}>{price} ₽</p>
            <button>
                <ShoppingCart color="#5c8f62" size={25} strokeWidth={1.7}/>
            </button>
        </div>
        <Link to={`/product/${id}`} className={styles.title} >{title}</Link>
    </div>
);

export default ProductCard;
