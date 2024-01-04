import React from 'react';
import styles from './CartItemTotal.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import Skeleton from 'react-loading-skeleton';
const CartItemTotal = ({ value, icon, label, price, priceLoading }) => {
  return (
    <>
      {' '}
      <div class="mb-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="" style={{ display: 'flex', alignItems: 'center' }}>
          <i class={`${icon}  mr-2`} style={{ fontSize: '20px' }}></i>

          {label}
        </div>
        {price ? (
          <>
            {priceLoading ? (
              <Skeleton width={64} height={24} />
            ) : (
              <h4 className="" style={{ paddingTop: '1px' }}>
                {currencyFormat(price)}
              </h4>
            )}
          </>
        ) : value ? (
          value
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CartItemTotal;
