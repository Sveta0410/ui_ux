import React from 'react';
import styles from './product.module.css';
import { useParams } from 'react-router-dom';
import { Products } from '../../consts/products';



function Product() {
    const {id} = useParams();
    
    return (
        <div className={styles.productPage}>
            <h1>{id}</h1>
            <p>{Products.find(product => product.id === Number(id))?.description}</p>
            
            
       </div>
    );
}
export default Product;