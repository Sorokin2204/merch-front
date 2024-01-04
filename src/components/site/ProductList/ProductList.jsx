import React from 'react';
import styles from './ProductList.module.scss';
import ProductItem from '../ProductItem/ProductItem';
import { productList } from '../../../data';
const ProductList = () => {
  return (
    <>
      {' '}
      <div class="mt-100">
        <div class="container">
          <div class="section__head">
            <div
              class="d-md-flex
							sm:space-y-20
							space-x-20
							justify-content-between
							align-items-center">
              <h2 class="section__title text-center">Товары</h2>
            </div>
          </div>
          <div class="row">
            {productList?.map((item) => (
              <ProductItem {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
