import React from 'react';
import styles from './ErrorPage.module.scss';
import StatusLayout from '../../../components/site/StatusLayout/StatusLayout';
const ErrorPage = () => {
  return (
    <>
      <StatusLayout color={'#e95432'} title={'Произошла ошибка'} text={'Попробуйте создать заказ еще раз'} icon={'ri-close-line'} btnColor={'btn-orange'} />
    </>
  );
};

export default ErrorPage;
