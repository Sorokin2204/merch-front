import React from 'react';
import styles from './ProductListPage.module.scss';
import ProductList from '../../../components/site/ProductList/ProductList';
const ProductListPage = () => {
  return (
    <>
      <div class="hero_marketplace bg_white">
        <div class="container">
          <h1 class="text-center">Каталог</h1>
        </div>
      </div>

      <ProductList />
    </>
  );
};

export default ProductListPage;
