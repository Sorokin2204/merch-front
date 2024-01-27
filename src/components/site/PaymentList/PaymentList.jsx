import React from 'react';
import styles from './PaymentList.module.scss';
import PaymentItem from '../PaymentItem/PaymentItem';
import { useDispatch } from 'react-redux';
import { setActivePayment } from '../../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
const PaymentList = () => {
  const dataPayment = [
    {
      icon: '/img/qiwi.svg',
      name: 'QIWI',
      slug: 'QIWI',
    },
    {
      icon: '/img/usdt.svg',
      name: 'USDT',
      slug: 'USDT',
    },
    {
      icon: '/img/visa.svg',
      name: 'VISA',
      slug: 'VISA',
    },
    {
      icon: '/img/mastercard.svg',
      name: 'MasterCard',
      slug: 'MasterCard',
    },
  ];
  const dispatch = useDispatch();
  const { activePayment } = useSelector((state) => state.app);
  return (
    <>
      <div className="h3 mb-20 mt-20 mx-auto" style={{}}>
        Способы оплаты
      </div>
      <div class="card__item payment-list " style={{ overflow: 'visible', transform: 'none', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr ', gridGap: '10px' }}>
        {dataPayment?.map((payment) => (
          <PaymentItem
            {...payment}
            active={payment?.slug == activePayment?.slug}
            onClick={() => {
              dispatch(setActivePayment(payment));
            }}
          />
        ))}
      </div>
    </>
  );
};

export default PaymentList;
