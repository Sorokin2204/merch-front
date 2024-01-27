import React from 'react';
import styles from './ProductItem.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setCart } from '../../../redux/slices/app.slice';
import { getCartData } from '../../../utils/getCartData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../utils/addToCart';
const ProductItem = ({ slug, image, name, price, id }) => {
  const { cart } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <>
      {' '}
      <div class="product-item col-md-6 col-sm-12">
        <div class="card__item four" style={{ padding: 0, maxWidth: 'none' }}>
          <div class="card_body space-y-10">
            <div class="card_head" style={{ height: '30rem', maxHeight: 'auto' }}>
              <Link to={`/product/${slug}`}>
                <img
                  src={image[0]}
                  alt="item
												img"
                />
              </Link>
            </div>

            <h6 class="card_title" style={{ padding: '0 20px 0 20px' }}>
              <a class="color_black h5" style={{ cursor: 'pointer', fontSize: '30px' }}>
                {name}
              </a>
            </h6>
            <div class="card_footer d-block space-y-10" style={{ padding: '0 20px 20px 20px' }}>
              <div class="card_footer justify-content-start">
                <a class="">
                  <p class="" style={{ fontSize: '24px' }}>
                    <span class="color_green ">{currencyFormat(price)}</span>
                  </p>
                </a>
              </div>
              <div class="hr"></div>
              <div
                class="d-flex
											align-items-center
											space-x-10
											justify-content-end">
                {cart?.find((cartItem) => cartItem?.id == id) ? (
                  <Link to={'/cart'} class="btn btn-green btn-lg" style={{ height: '46.3px' }}>
                    <i class="ri-check-line" style={{ marginRight: '6px', fontSize: '20px' }}></i>В корзине
                  </Link>
                ) : (
                  <a
                    class="btn btn-primary btn-lg d-flex
											align-items-center "
                    onClick={() => {
                      addToCart({ id });
                      toast.success('Товар добавлен в корзину', {
                        position: 'bottom-right',
                        autoClose: 2000,
                      });

                      dispatch(setCart(getCartData()));
                    }}>
                    В корзину
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
