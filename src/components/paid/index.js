import React, { useState, useEffect } from 'react';
import styles from './paid.module.css';
import { connect } from 'react-redux';
import { orderErrorSelector, orderLoadedSelector } from '../../redux/selectors';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const Paid = ({ error, loaded }) => {
  console.log(error);

  return (
    <div className={cn(styles.wrap, { [styles.success]: !error && loaded })}>
      <div className={styles.inner}>
        {!loaded ? (
          <h3>you dont have any payments yet</h3>
        ) : error ? (
          <h3>Ooops</h3>
        ) : (
          <h3>Yeah!</h3>
        )}
        {error ? (
          <>
            {error.message} <Link to="/checkout">go back</Link>{' '}
          </>
        ) : (
          loaded && <span>congrats, soon youll recieve your order</span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: orderErrorSelector(state),
  loaded: orderLoadedSelector(state),
});

export default connect(mapStateToProps)(Paid);
