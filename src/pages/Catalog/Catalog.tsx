import React from "react";
import styles from './catalog.module.css';
import  ProductCard from 'D:/sveta/ui/src/components/productCard/index.tsx';
import  FilterElem from 'D:/sveta/ui/src/components/filterElem/index.tsx';
import { Products } from "../../consts/products";


function Catalog() {
    return (
        <div>
            <div className={styles.catalog}>
                <div className={styles.filtersRectangle}>
                    <div className={styles.filtersNameRectangle}>
                        <p className={styles.filterMain}>Фильтры</p> 
                    </div>
                    <div className={styles.filterList}>
                        <FilterElem elemName="Тип" />
                        <FilterElem elemName="Цена" />
                        <FilterElem elemName="Размер" />
                        <FilterElem elemName="Цвет" />
                    </div> 
                </div>
                <div className={styles.products}>
                {Products.map((product) => (
        <ProductCard
          id={product.id}
          image={product.url}
          price={product.price}
          description={product.description}
        />
      ))}
                </div>
            </div>
       </div>
    );
   }
export default Catalog;