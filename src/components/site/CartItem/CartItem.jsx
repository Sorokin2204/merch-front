import React, { useEffect, useState } from 'react';
import styles from './CartItem.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import { addToCart } from '../../../utils/addToCart';
import { setCart, setClickedChangeCount } from '../../../redux/slices/app.slice';
import { getCartData } from '../../../utils/getCartData';
import { useDispatch } from 'react-redux';
import { removeToCart } from '../../../utils/removeToCart';
import { deleteFromCart } from '../../../utils/deleteFromCart';
const CartItem = ({ image, count, price, name, id }) => {
  const [clickedCount, setClickedCount] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (clickedCount) {
      const delayDebounceFn = setTimeout(() => {
        dispatch(setClickedChangeCount({}));
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [clickedCount]);
  return (
    <>
      <div class="cart-item card__item five" style={{ transform: 'none' }}>
        <div class="card_body space-y-10 space-x-10 d-flex">
          <div class="card_head">
            <img src={image[0]} alt="" style={{ transform: 'none' }} />
          </div>

          <div
            class="d-flex flex-column justify-content-stretch w-100
																space-y-10">
            <h4 class="card_title">{name}</h4>
            <div class="hr"></div>
            <div class="card_footer d-block space-y-10">
              <div
                class="d-flex
																		align-items-center
																		justify-content-between
																		space-x-3">
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 90px auto', alignItems: 'center', gridGap: '10px' }}>
                  <i
                    class="ri-subtract-line"
                    style={{ fontSize: '30px', opacity: count > 1 ? '1' : '0.2', cursor: count > 1 ? 'pointer' : 'auto' }}
                    onClick={() => {
                      if (parseInt(count) > 1) {
                        removeToCart({ id });
                        dispatch(setCart(getCartData()));
                        setClickedCount({});
                      }
                    }}></i>
                  <input value={count} disabled type="text" class="form-control input_white" style={{ textAlign: 'center', padding: '10px', userSelect: 'none', pointerEvents: 'none' }}></input>{' '}
                  <i
                    class="ri-add-line"
                    style={{ fontSize: '30px', opacity: count < 10 ? '1' : '0.2', cursor: count < 10 ? 'pointer' : 'auto' }}
                    onClick={() => {
                      if (parseInt(count) < 10) {
                        addToCart({ id });
                        dispatch(setCart(getCartData()));
                        setClickedCount({});
                      }
                    }}></i>
                </div>
                <span class="color_green txt_sm text-right" style={{ fontSize: '20px' }}>
                  {currencyFormat(count * price)}
                </span>
              </div>
              <a
                class="btn  d-flex "
                href="#"
                style={{ marginLeft: 'auto', width: 'min-content', background: '#eb5757' }}
                onClick={() => {
                  deleteFromCart({ id });
                  dispatch(setCart(getCartData()));
                }}>
                Удалить
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
