import React from 'react';
import {connect} from 'react-redux';
import {orderSubmitSelector} from "../../../redux/selectors";
import styles from './order-error.module.css';

function OrderError({orderResponse}) {
    return (
        <div className={styles.orderResponse}>
            <h2>{orderResponse.error}</h2>
        </div>
    );
}

const mapStateToProps = (state) => ({
    orderResponse: orderSubmitSelector(state),
});

export default connect(mapStateToProps)(OrderError);