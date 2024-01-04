import React, { useEffect } from 'react';
import s from './HomePage.module.scss';
import ProductList from '../../../components/site/ProductList/ProductList';

const HomePage = () => {
  return (
    <>
      <div class="hero__1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero__left space-y-20">
                <h1 class="hero__title">Discover digital art and collect NFTs</h1>
                <p class="hero__text txt">raroin is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users the best possible experience.</p>
                <div
                  class="space-x-20 d-flex flex-column flex-md-row
										sm:space-y-20">
                  <a class="btn btn-primary" href="Marketplace.html">
                    View market
                  </a>
                  <a class="btn btn-white" href="Upload-type.html">
                    Upload your item
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <img class="img-fluid w-full" id="img_js" src="https://raroin-nft.vercel.app/assets/img/bg/in_hero1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
