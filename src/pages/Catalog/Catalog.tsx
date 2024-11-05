import React from "react";
import styles from './catalog.module.css';
import bear from '/src/assets/toys/bear.png';
import bunny from '/src/assets/toys/bunny.png';
import cow from '/src/assets/toys/cow.png';
import dino from '/src/assets/toys/dino.png';
import doll from '/src/assets/toys/doll.png';
import flower_coaster from '/src/assets/toys/flower_coaster.png';
import frog_small from '/src/assets/toys/frog_small.png';
import frog from '/src/assets/toys/frog.png';
import mouse from '/src/assets/toys/mouse.png';
import octopus from '/src/assets/toys/octopus.png';
import tiny_bunny from '/src/assets/toys/tiny_bunny.png';
import tiny_frog from '/src/assets/toys/tiny_frog.png';
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart } from 'lucide-react';

const FilterElem = ({ elemName }) => (
    <div className={styles.filterListElem}>
        <ChevronDown color="black" size={25} strokeWidth={1}/>
        <p className={styles.filterName}>{elemName}</p>
    </div>
);

const ProductElem = ({ image, price, description}) => (
    <div className={styles.productRectangle}>
        <img src={image} alt="toy" className={styles.image}></img>
        <div className={styles.priceAndBuy}>
            <p className={styles.price}>{price} ₽</p>
            <button>
                <ShoppingCart color="#5c8f62" size={25} strokeWidth={1.7}/>
            </button>
            
        </div>
        <Link to="/product" className={styles.description} >{description}</Link>
    </div>
);

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
                    <div className={styles.productRow}>
                        <ProductElem 
                            image={cow}
                            price="1000"
                            description="Розовая коровка"
                        />
                        <ProductElem 
                            image={dino}
                            price="350"
                            description="Динозаврик Жора"
                        />
                        <ProductElem 
                            image={mouse}
                            price="350"
                            description="Мышка"
                        />
                        <ProductElem 
                            image={tiny_frog}
                            price="250"
                            description="Мини лягушка"
                        />
                    </div>
                    <div className={styles.productRow}>
                        <ProductElem 
                            image={doll}
                            price="2500"
                            description="Кукла Розалин"
                        />
                        <ProductElem 
                            image={tiny_bunny}
                            price="2000"
                            description="Кролик малыш"
                        />
                        <ProductElem 
                            image={frog}
                            price="400"
                            description="Весёлая лягушка"
                        />
                        <ProductElem 
                            image={flower_coaster}
                            price="1000"
                            description="Подставка весенняя"
                        />
                    </div>

                    <div className={styles.productRow}>
                        <ProductElem 
                            image={octopus}
                            price="700"
                            description="Медуза Марина"
                        />
                        <ProductElem 
                            image={frog_small}
                            price="2300"
                            description="Лягушка-квакушка"
                        />
                        <ProductElem 
                            image={bear}
                            price="1000"
                            description="Мишка"
                        />
                        <ProductElem 
                            image={bunny}
                            price="1700"
                            description="Зайка Настя"
                        />
                    </div>
                </div>
            </div>
       </div>
    );
   }
export default Catalog;