import styles from './filterElem.module.css';
import React from 'react';
import { Circle, CheckCircle } from 'lucide-react';

const FilterElem = ({ elemName, onClick, isSelected }) => {
    return (
        <div className={styles.filterListElem} onClick={onClick}>
            {isSelected ? (
                <CheckCircle color="black" size={20} strokeWidth={1} />
            ) : (
                <Circle color="gray" size={20} strokeWidth={1} />
            )}
            <p className={styles.filterName}>{elemName}</p>
        </div>
    );
};

export default FilterElem;
