import React from 'react';
import styles from './SuccessPage.module.scss';
import StatusLayout from '../../../components/site/StatusLayout/StatusLayout';
const SuccessPage = () => {
  return (
    <>
      <StatusLayout color={'rgb(54, 179, 126)'} title={'Заказ оплачен'} text={'В ближайшее время мы свяжемся с вами'} icon={'ri-check-line'} btnColor={'btn-green'} />
    </>
  );
};

export default SuccessPage;
