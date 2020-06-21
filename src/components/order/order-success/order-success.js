import React from 'react';
import styles from './order-success.module.css';

function OrderSuccess(props) {
    return (
        <div>
            <h1 className={styles.orderTitle}>Спасибо за заказ!</h1>
        </div>
    );
}

export default OrderSuccess;