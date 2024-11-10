import React from "react";
import styles from './productDescription.module.css';

const ProductDescription = ({ text }) => (
    <div>
        {text.map((paragraph, index) => (
          <p className={styles.productDescriptionText} key={index}>{paragraph}</p>
        ))}
      </div>
);

export default ProductDescription;