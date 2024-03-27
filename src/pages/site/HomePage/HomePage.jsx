import React, { useEffect } from 'react';
import s from './HomePage.module.scss';
import ProductList from '../../../components/site/ProductList/ProductList';

const HomePage = () => {
  return (
    <>
      <div class="hero__1" style={{ marginBottom: '50px' }}>
        <div class="container">
          <div class="row align-items-center pb-20">
            <div style={{}}>
              <h1 class="d-flex justify-content-center  mb-20 pt-30">Сувениры, подарки, аксессуары</h1>
              <h3 class="d-flex justify-content-center  " style={{ opacity: 0.7 }}>
                по мотивам мобильных и компьютерных игр
              </h3>
            </div>
            {/* <img src="/img/cover.png" alt="" className="" /> */}
          </div>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
