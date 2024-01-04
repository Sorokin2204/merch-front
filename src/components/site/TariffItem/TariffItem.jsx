import React from 'react';
import styles from './TariffItem.module.scss';
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import { currencyFormat } from '../../../utils/currencyFormat';
import { useSelector } from 'react-redux';

const TariffItem = ({ loading, days, title, icon, price, active, onClick = () => {}, disabled }) => {
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
        {active && <i class="ri-checkbox-circle-fill" style={{ position: 'absolute', right: '6px', top: '0px', fontSize: '24px', color: '#566ffe' }}></i>}

        <div className={clsx(styles.title)}>
          {title} <br />
          <div className="" style={{ height: '27px' }}>
            {loading ? <Skeleton width={74} height={24} /> : <div style={{ fontSize: '18px', fontWeight: '500' }}>{days ? days : <i class="ri-subtract-line" style={{ fontSize: '20px' }}></i>}</div>}
          </div>
        </div>
        <div className={clsx(styles.icons)}>
          <i class={icon}></i>
        </div>
        <div className={clsx(styles.text)}>
          От пункта отправки <br /> до пункта выдачи
        </div>

        <div className={clsx(styles.price)}> {loading ? <Skeleton width={54} height={26} /> : price ? currencyFormat(price) : <i class="ri-subtract-line" style={{ fontSize: '20px' }}></i>}</div>
      </div>
    </>
  );
};

export default TariffItem;
