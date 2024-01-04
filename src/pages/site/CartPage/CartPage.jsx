import React, { useEffect } from 'react';
import styles from './CartPage.module.scss';
import CartItem from '../../../components/site/CartItem/CartItem';
import PostCalculator from '../../../components/site/PostCalculator/PostCalculator';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { currencyFormat } from '../../../utils/currencyFormat';
import CartItemTotal from '../../../components/site/CartItemTotal/CartItemTotal';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import CartEmpty from '../../../components/site/CartEmpty/CartEmpty';
import PaymentList from '../../../components/site/PaymentList/PaymentList';
import CartTotal from '../../../components/site/CartTotal/CartTotal';
import { useDispatch } from 'react-redux';
import { getPostCountry } from '../../../redux/actions/post/getPostCountry';
import Loading from '../../../components/site/Loading/Loading';
const CartPage = () => {
  const [showTotal, setShowTotal] = useState(false);
  const { activeTariff, cart } = useSelector((state) => state.app);
  const {
    calculatePostCost: { data: calculateData, loading: calculateLoading },
  } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostCountry());
  }, []);

  return (
    <>
      {cart?.length >= 1 ? (
        <>
          <div class="hero_marketplace bg_white">
            <div class="container">
              <h1 class="text-center">Корзина</h1>
            </div>
          </div>
          <div className="cart-content">
            <div class="mt-100">
              {cart?.map((item) => (
                <CartItem {...item} />
              ))}
            </div>
            <PostCalculator />
          </div>
        </>
      ) : (
        <div>
          <CartEmpty />
        </div>
      )}
    </>
  );
};

export default CartPage;
