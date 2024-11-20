import React, { useState } from "react";
import styles from './catalog.module.css';
import ProductCard from 'D:/sveta/ui/src/components/productCard/index.tsx';
import FilterElem from 'D:/sveta/ui/src/components/filterElem/index.tsx';
import { Products as productsConst } from "../../consts/products";

function Catalog() {
    const [products, setProducts] = useState(productsConst);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleClick = (sortFunction, ascending, filterId) => {
        sortFunction(ascending);
        setSelectedFilter(filterId);
    };

    const sortProductsByPrice = (ascending) => {
        setProducts((prev) => [...prev].sort((a, b) => ascending ? a.price - b.price : b.price - a.price));
    };

    const sortProductsBySize = (ascending) => {
        setProducts((prev) => [...prev].sort((a, b) => ascending ? a.size - b.size : b.size - a.size));
    };

    return (
        <div>
            <div className={styles.catalog}>
                <div className={styles.filtersRectangle}>
                    <div className={styles.filtersNameRectangle}>
                        <p className={styles.filterMain}>Сортировка</p>
                    </div>
                    <div className={styles.filterList}>
                        <p className={styles.filterParamName}>Цена</p>
                        <FilterElem
                            onClick={() => handleClick(sortProductsByPrice, true, 'priceAsc')}
                            elemName="По возрастанию"
                            isSelected={selectedFilter === 'priceAsc'}
                        />
                        <FilterElem
                            onClick={() => handleClick(sortProductsByPrice, false, 'priceDesc')}
                            elemName="По убыванию"
                            isSelected={selectedFilter === 'priceDesc'}
                        />
                        <p className={styles.filterParamName}>Размер</p>
                        <FilterElem
                            onClick={() => handleClick(sortProductsBySize, true, 'sizeAsc')}
                            elemName="По возрастанию"
                            isSelected={selectedFilter === 'sizeAsc'}
                        />
                        <FilterElem
                            onClick={() => handleClick(sortProductsBySize, false, 'sizeDesc')}
                            elemName="По убыванию"
                            isSelected={selectedFilter === 'sizeDesc'}
                        />
                    </div>
                </div>
                <div className={styles.products}>
                    {products && products.map((product) => (
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
