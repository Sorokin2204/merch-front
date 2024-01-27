import React from 'react';
import styles from './ProductListPage.module.scss';
import ProductList from '../../../components/site/ProductList/ProductList';
import Title from '../../../components/site/Title/Title';
const ProductListPage = () => {
  return (
    <>
      <Title>Каталог</Title>

      <ProductList />
    </>
  );
};

export default ProductListPage;
