import React, { useEffect } from 'react';
import s from './HomePage.module.scss';
import ProductList from '../../../components/site/ProductList/ProductList';

const HomePage = () => {
  return (
    <>
      <div class="hero__1" style={{ marginBottom: '100px' }}>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero__left space-y-20">
                <h1 class="hero__title">Мерчи для фанатов игр</h1>
                <p class="hero__text txt">Магазин уникальных и авторских мерчей собственного производства по мобильным и компьютерным играм</p>
              </div>
            </div>
            <div class="col-lg-6">
              <img class="img-fluid w-full" id="img_js" src="/img/gg-banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
