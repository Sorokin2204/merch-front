import React from 'react';
import styles from './PaymentItem.module.scss';
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import { currencyFormat } from '../../../utils/currencyFormat';
import { useSelector } from 'react-redux';

const PaymentItem = ({ name, icon, active, onClick = () => {}, disabled }) => {
  const { activeTheme } = useSelector((state) => state.app);
  return (
    <>
      <div
        className={clsx(styles.wrap, active && styles.wrapActive, activeTheme == 'dark' && styles.wrapDark)}
        onClick={() => {
          if (!disabled) {
            onClick();
          }
        }}
        style={{ opacity: disabled ? '0.5' : 1, cursor: disabled ? 'auto' : 'pointer' }}>
        {active && <i class="ri-checkbox-circle-fill" style={{ position: 'absolute', right: '4px', top: '0px', fontSize: '20px', color: '#566ffe' }}></i>}
        <div className={clsx(styles.icons)}>
          <img src={icon}></img>
        </div>{' '}
        <div className={clsx(styles.title)}>{name}</div>
      </div>
    </>
  );
};

export default PaymentItem;
