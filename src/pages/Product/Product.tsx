import React, { useEffect, useState } from 'react';
import styles from './product.module.css';
import { useParams } from 'react-router-dom';
import { Products } from '../../consts/products';
import { Heart, Flower } from 'lucide-react';
import ProductDescription from '../../components/productDescription';




function Product() {
    const [fullName, setFullName] = useState("");
    useEffect(() => {
        async function getRandomFullName() {
            try {
                const response = await fetch('https://randomuser.me/api/');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                const firstName = data.results[0].name.first;
                const lastName = data.results[0].name.last;

                const fullName = `${firstName} ${lastName}`;
                localStorage.setItem('randomFullName', fullName);
                setFullName(fullName);
            } catch (error) {
                console.error('Ошибка при получении имени:', error);
            }
        }

        // Вызываем функцию один раз при монтировании компонента
        getRandomFullName();
    }, []); // Пустой массив зависимостей означает, что useEffect вызывается только один раз при монтировании

    const {id} = useParams();
    const productInfo = Products.find(product => product.id === Number(id))
    
    return (
        <div className={styles.productPage}>          
            
            <img src={productInfo?.url} className={styles.productImage}/>
            <div className={styles.productblock}>
                <div className={styles.productInfoRectangle}>
                    <p className={styles.productTitle}>{productInfo?.title}</p>
                    <div className={styles.priceAndFlower}>
                        <p className={styles.productPrice}>{productInfo?.price} ₽</p>
                        {/* <Flower className={styles.rotatedFlower}  /> */}
                    </div>
                    <div className={styles.buyAndHeart}>
                        <button>Купить</button>
                        <Heart color='#FF94A6' size={50} strokeWidth={2.5}/>
                    </div> 
                </div>
                <ProductDescription text={productInfo?.description} />
                <p className={styles.productAuthor}>Автор схемы: {fullName}</p>
            </div>
       </div>
    );
}
export default Product;