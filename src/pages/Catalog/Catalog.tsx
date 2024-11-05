import { Button } from "antd";
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
import { ChevronDown  } from 'lucide-react';

function Catalog() {
    return (
        <div>
            <div className={styles.catalog}>
                <div className={styles.filtersRectangle}>
                    <div className={styles.filtersNameRectangle}>
                        <p className={styles.filterMain}>Фильтры</p> 
                    </div>
                    <div className={styles.filterList}>
                        <div className={styles.filterListElem}>
                            <ChevronDown color="black" size={25} strokeWidth={1}/>
                            <p className={styles.filterName}>Тип</p>
                        </div>
                        <div className={styles.filterListElem}>
                            <ChevronDown color="black" size={25} strokeWidth={1}/>
                            <p className={styles.filterName}>Цена</p>
                        </div>
                        <div className={styles.filterListElem}>
                            <ChevronDown color="black" size={25} strokeWidth={1}/>
                            <p className={styles.filterName}>Размер</p>
                        </div>
                        <div className={styles.filterListElem}>
                            <ChevronDown color="black" size={25} strokeWidth={1}/>
                            <p className={styles.filterName}>Цвет</p>
                        </div>

                    </div> 
                </div>
                <div className={styles.products}>
                    <div className={styles.productRow}>
                        <div className={styles.productRectangle}>
                            <img src={cow} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>1000 ₽</p>
                            <Link to="/product" className={styles.description} >Розовая коровка</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={dino} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>350 ₽</p>
                            <Link to="/product" className={styles.description} >Динозаврик Жора</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={mouse} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>350 ₽</p>
                            <Link to="/product" className={styles.description} >Мышка</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={tiny_frog} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>250 ₽</p>
                            <Link to="/product" className={styles.description} >Мини лягушка</Link>
                        </div>
                    </div>
                    <div className={styles.productRow}>
                        <div className={styles.productRectangle}>
                            <img src={doll} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>2500 ₽</p>
                            <Link to="/product" className={styles.description} >Кукла Розалин</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={tiny_bunny} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>2000 ₽</p>
                            <Link to="/product" className={styles.description} >Кролик малыш</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={frog} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>400 ₽</p>
                            <Link to="/product" className={styles.description} >Весёлая лягушка</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={flower_coaster} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>1000 ₽</p>
                            <Link to="/product" className={styles.description} >Подставка весенняя</Link>
                        </div>
                    </div>

                    <div className={styles.productRow}>
                        <div className={styles.productRectangle}>
                            <img src={octopus} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>700 ₽</p>
                            <Link to="/product" className={styles.description} >Медуза Марина</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={frog_small} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>2300 ₽</p>
                            <Link to="/product" className={styles.description} >Лягушка-квакушка</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={bear} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>1000 ₽</p>
                            <Link to="/product" className={styles.description} >Мишка</Link>
                        </div>
                        <div className={styles.productRectangle}>
                            <img src={bunny} alt="toy" className={styles.image}></img>
                            <p className={styles.price}>1700 ₽</p>
                            <Link to="/product" className={styles.description} >Зайка Настя</Link>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
   }
export default Catalog;