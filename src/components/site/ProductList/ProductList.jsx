import React from 'react';
import styles from './ProductList.module.scss';
import ProductItem from '../ProductItem/ProductItem';
import { productList } from '../../../data';
const ProductList = () => {
  return (
    <>
      {' '}
      <div class="mt-0">
        <div class="container">
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
