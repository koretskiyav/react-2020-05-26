import React from 'react';
import styles from './ProductDetail.module.css';

export default ({ product }) => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetail__col}>
        <div className={styles.productDetail__col__content}>{product.name}</div>
        <div className={styles.productDetail__col__label}>dish name</div>
      </div>
      <div className={styles.productDetail__col}>
        <div className={styles.productDetail__col__content}>
          {product.price} $
        </div>
        <div className={styles.productDetail__col__label}>price</div>
      </div>
      <div className={styles.productDetail__col}>
        <div className={styles.productDetail__col__content}>
          {`${product.amount} pc.`}
        </div>
        <div className={styles.productDetail__col__label}>in your cart</div>
      </div>
      <div className={styles.productDetail__col}>
        <div className={styles.productDetail__col__content}>
          {product.total} $
        </div>
        <div className={styles.productDetail__col__label}>total cost</div>
      </div>
    </div>
  );
};
