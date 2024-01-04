import React from 'react';
import styles from './CartEmpty.module.scss';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <>
      <div class="not__found">
        <div class="container">
          <div class="row justify-content-center align-items-center pt-100">
            <div class="col-lg-3 d-none d-lg-block"></div>
            <div class="col-lg-6">
              <div class="space-y-30 content">
                <div
                  class="space-y-20 d-flex flex-column
			                        justify-content-center align-items-center">
                  <div className="hero_no_results" style={{ padding: '30px' }}>
                    {' '}
                    <div class="box search__box">
                      <i class="ri-ghost-2-line"></i>
                    </div>
                  </div>

                  <h2 class="text-center">Корзина пуста</h2>
                  <div class="text-center">Вернитесь в каталог для выбора товара</div>
                  <div>
                    <Link to="/products" class="btn btn-grad">
                      В каталог
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 d-none d-lg-block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
