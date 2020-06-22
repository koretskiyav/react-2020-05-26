import React from 'react';
import styles from './ThanksForOrder.module.css';
import Button from '../button';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

const ThanksForOrder = ({ push }) => {
  return (
    <div className={styles.root}>
      <div>Thank's For Order</div>
      <Button secondary block onClick={() => push('/checkout')}>
        Return to basket and check that it's empty
      </Button>
      <Button secondary block onClick={() => push('/')}>
        Return to menu
      </Button>
    </div>
  );
};

export default connect(null, { push })(ThanksForOrder);
