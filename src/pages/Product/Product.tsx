import React, { useEffect, useState } from 'react';
import styles from './product.module.css';
import { useParams } from 'react-router-dom';
import { Products } from '../../consts/products';



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

                setFullName(fullName);
            } catch (error) {
                console.error('Ошибка при получении имени:', error);
            }
        }

        // Вызываем функцию один раз при монтировании компонента
        getRandomFullName();
    }, []); // Пустой массив зависимостей означает, что useEffect вызывается только один раз при монтировании

    const {id} = useParams();
    
    return (
        <div className={styles.productPage}>
            <h1>{id}</h1>
            <p>Автор схемы: {fullName}</p>
            <p>{Products.find(product => product.id === Number(id))?.description}</p>
            
            
       </div>
    );
}
export default Product;