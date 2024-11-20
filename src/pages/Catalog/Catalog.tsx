import React, { useState } from "react";
import styles from './catalog.module.css';
import  ProductCard from 'D:/sveta/ui/src/components/productCard/index.tsx';
import  FilterElem from 'D:/sveta/ui/src/components/filterElem/index.tsx';
import { Products as productsConst } from "../../consts/products";


function Catalog() {
    const [products, setProducts] = useState(productsConst);

    return (
        <div>
            <div className={styles.catalog}>
                <div className={styles.filtersRectangle}>
                    <div className={styles.filtersNameRectangle}>
                        <p className={styles.filterMain}>Фильтры</p> 
                    </div>
                    <div className={styles.filterList}>
                        {/* <FilterElem onClick={() => setProducts((prev) => [...prev].sort((a, b) => a.id - b.id))} elemName="Тип" />  */}
                        <FilterElem onClick={() => setProducts((prev) => [...prev].sort((a, b) => b.price - a.price))} elemName="Цена" />
                        <FilterElem onClick={() => setProducts((prev) => [...prev].sort((a, b) => b.size - a.size))} elemName="Размер" /> 
                        {/* <FilterElem onClick={() => setProducts((prev) => [...prev].sort((a, b) => a.color > b.color ? 1 : -1))} elemName="Цвет" />  */}
                        
                        {/* <FilterElem onClick={() =>  Products.sort((a, b) => b.size - a.size)} elemName="Размер" />
                        <FilterElem onClick={() =>  Products.sort((a, b) => Number(b.color) - Number(a.color))} elemName="Цвет" /> */}
                    </div> 
                </div>
                <div className={styles.products}>
                    {products && products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.url}
                        price={product.price}
                        title={product.title}
                    />
                    ))}
                </div>
            </div>
       </div>
    );
   }
export default Catalog;