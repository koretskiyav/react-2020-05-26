import React from 'react';
import styles from './ThanksForOrder.module.css';
import Button from '../button';
import { withRouter } from 'react-router-dom';

const ThanksForOrder = ({ history: { push } }) => {
  return (
    <div className={styles.root}>
      <div>Thank's For Order</div>
      <Button secondary block onClick={() => push('/checkout')}>
        Return to basket and check that it's empty
      </Button>
    </div>
  );
};

export default withRouter(ThanksForOrder);
