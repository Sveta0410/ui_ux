import styles from './filterElem.module.css';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const FilterElem = ({ elemName, onClick }) => {
    return (
        <div className={styles.filterListElem} onClick={onClick}>
            <ChevronDown color="black" size={25} strokeWidth={1}/>
            <p className={styles.filterName}>{elemName}</p>
        </div>
    );
};

export default FilterElem;
