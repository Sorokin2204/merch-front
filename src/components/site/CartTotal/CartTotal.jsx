import React, { useState } from 'react';
import styles from './CartTotal.module.scss';
import AnimateHeight from 'react-animate-height';
import { currencyFormat } from '../../../utils/currencyFormat';
import CartItemTotal from '../../../components/site/CartItemTotal/CartItemTotal';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { totalSumCart } from '../../../utils/totalSumCart';
import { totalWeightCart } from '../../../utils/totalWeightCart';
const CartTotal = ({ onSubmit }) => {
  const [showTotal, setShowTotal] = useState(false);
  const { activeTariff, cart, activePayment } = useSelector((state) => state.app);
  const {
    calculatePostCost: { data: calculateData, loading: calculateLoading },
  } = useSelector((state) => state.post);
  return (
    <>
      {' '}
      <div class="card__item" style={{ overflow: 'visible', transform: 'none', margin: '0 auto', marginTop: '20px', position: 'sticky', bottom: '0px', left: 0, zIndex: '1000' }}>
        <AnimateHeight duration={300} height={showTotal ? 'auto' : 0}>
          {' '}
          <div className="pb-3" style={{}}>
            {' '}
            {activePayment && (
              <CartItemTotal
                icon={'ri-wallet-line'}
                label={`Способ оплаты`}
                value={
                  <div class="d-flex align-items-center" style={{ fontWeight: '600' }}>
                    <img width={30} style={{ width: '30px', marginRight: '10px' }} src={activePayment?.icon} />
                    {activePayment?.name}
                  </div>
                }
              />
            )}
            {activeTariff && (
              <>
                {' '}
                <CartItemTotal
                  icon={'ri-map-pin-2-line'}
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '2px' }}>Санкт-Петербург —</div> {calculateLoading ? <Skeleton style={{ transform: 'translateY(-1px)' }} height={24} width={100} /> : <span>Москва</span>}
                    </div>
                  }
                />
                <CartItemTotal icon={'ri-box-3-line'} label={`${totalWeightCart()} грамм`} />
                <CartItemTotal
                  icon={activeTariff?.icon}
                  label={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '6px' }}>{activeTariff?.title}</div> {calculateLoading ? <Skeleton style={{ transform: 'translateY(-1px)' }} height={24} width={64} /> : <span>{activeTariff?.days}</span>}
                    </div>
                  }
                  priceLoading={calculateLoading}
                  price={activeTariff?.price}
                />
              </>
            )}
            <CartItemTotal icon={'ri-shopping-cart-line'} label={`Стоимость товара`} price={totalSumCart()} />
          </div>
        </AnimateHeight>

        <div class="total-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {' '}
          <div class="d-flex" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <i
              class={`ri-arrow-${showTotal ? 'up' : 'down'}-s-line`}
              style={{ fontSize: '30px' }}
              onClick={() => {
                setShowTotal(!showTotal);
              }}></i>
            {calculateLoading ? (
              <Skeleton style={{ transform: 'translate(4px,-1px)' }} height={30} width={100} />
            ) : (
              <h3 className="" style={{ paddingLeft: '10px' }}>
                {currencyFormat(parseInt(totalSumCart()) + parseInt(activeTariff?.price ?? 0))}
              </h3>
            )}
          </div>
          <button class={`btn ${!activeTariff || !activePayment ? 'btn-disabled' : 'btn-green'}  btn-lg d-flex `} onClick={onSubmit} style={{ marginLeft: 'auto', width: 'min-content' }}>
            Оплатить
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
