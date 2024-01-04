import React from 'react';
import styles from './PostCalculator.module.scss';
import Tabs from '../Tabs/Tabs';
import { useState } from 'react';
import Input from '../Input/Input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { findPostAddresses } from '../../../redux/actions/post/findPostAddresses';
import { setActiveTariff, setCart } from '../../../redux/slices/app.slice';
import TariffItem from '../TariffItem/TariffItem';
import { useEffect } from 'react';
import { resetCalculatePostCost, resetFindPostAddresses } from '../../../redux/slices/post.slice';
import PaymentList from '../PaymentList/PaymentList';
import CartTotal from '../CartTotal/CartTotal';
import { callPostCalculator } from '../../../utils/callPostCalculator';
import { useNavigate } from 'react-router';
import Loading from '../Loading/Loading';
import { getCartData } from '../../../utils/getCartData';
const PostCalculator = () => {
  const tabs = [
    { label: 'По России', value: 'russia' },
    { label: 'В другую страну', value: 'other' },
  ];
  const tariffs = [
    { title: 'Обычная', slug: 'standard', icon: 'ri-truck-line' },
    { title: 'Ускоренная', slug: 'fast', icon: 'ri-flashlight-line' },
  ];
  const form = useForm();
  const dispatch = useDispatch();
  const {
    findPostAddresses: { data: findAddressesData, loading: findAddressesLoading },
    getPostCountry: { data: postCountryData },
    calculatePostCost: { data: calculateData, loading: calculateLoading, error: calculateError },
  } = useSelector((state) => state.post);
  const { activeTariff, clickedChangeCount, activeTheme } = useSelector((state) => state.app);
  const [tariffList, setTariffList] = useState(tariffs);
  useEffect(() => {
    if (calculateData) {
      let updateTariffList = [...tariffs];
      updateTariffList[1] = { ...updateTariffList[1], price: calculateData?.minimumCosts?.firstClassCostInKopecks?.toString()?.slice(0, -2), days: calculateData?.text?.timeRapid };
      updateTariffList[0] = { ...updateTariffList[0], price: calculateData?.minimumCosts?.standardCostInKopecks?.toString()?.slice(0, -2), days: calculateData?.text?.timeStandard };
      setTariffList(updateTariffList);
      if (!activeTariff) {
        dispatch(setActiveTariff(updateTariffList[0]));
      } else {
        if (activeTariff?.slug == 'standard') {
          dispatch(setActiveTariff(updateTariffList[0]));
        }
        if (activeTariff?.slug == 'fast') {
          dispatch(setActiveTariff(updateTariffList[1]));
        }
      }
    }
  }, [calculateData]);

  const [activeTypeCountry, setActiveTypeCountry] = useState({ label: 'По России', value: 'russia' });
  const resetCalulator = () => {
    setTariffList(tariffs);
    dispatch(setActiveTariff(null));

    dispatch(resetFindPostAddresses(null));
    form.setValue('addressTo', null);
  };
  useEffect(() => {
    resetCalulator();
    form.setValue('countryTo', null);
    dispatch(resetCalculatePostCost());
  }, [activeTypeCountry]);
  const watchAddressTo = form.watch('addressTo');
  const watchCountryTo = form.watch('countryTo');
  useEffect(() => {
    if (calculateError) {
      resetCalulator();
    }
  }, [calculateError]);
  useEffect(() => {
    if (clickedChangeCount) {
      if (watchAddressTo?.precision == 'HOUSE') {
        callPostCalculator(watchAddressTo);
      }
      if (watchCountryTo) {
        callPostCalculator(watchCountryTo);
      }
    }
  }, [clickedChangeCount]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.removeItem('cart');
      dispatch(setCart(getCartData()));
      navigate('/success');
    }, 3000);
  };
  console.log(form.formState.errors);
  return (
    <>
      <div style={{ maxWidth: '35rem', margin: '0 auto' }}>
        <div className="h3 mb-20">Параметры доставки</div>
        <div class="card__item" style={{ overflow: 'visible', transform: 'none', maxWidth: '35rem', margin: '0 auto' }}>
          <img class="mb-30" src={activeTheme == 'dark' ? 'img/pochta-white.svg' : 'img/pochta.svg'} style={{ width: '140px', height: '20px', display: 'block' }} />
          <div class="mb-30">
            <Tabs list={tabs} active={activeTypeCountry?.value} setActive={setActiveTypeCountry} />
          </div>
          {activeTypeCountry?.value == 'russia' ? (
            <Input
              options={findAddressesData}
              isSearch
              form={form}
              name="addressTo"
              label="Адрес получателя"
              onSearch={(query) => {
                dispatch(findPostAddresses(query));
              }}
              onClickOption={(val) => {
                form.setValue('addressTo', val);
              }}
              showSearchOptions={!findAddressesLoading}
            />
          ) : (
            <Input
              options={postCountryData}
              isSelect
              form={form}
              name="countryTo"
              label="Страна получателя"
              onClickOption={(val) => {
                form.setValue('countryTo', val);
              }}
              showSearchOptions={true}
            />
          )}
          <Input
            rules={{
              required: true,
              minLength: {
                value: 6,
                message: 'Не корректный индекс',
              },
              maxLength: {
                value: 6,
                message: 'Не корректный индекс',
              },
            }}
            form={form}
            name="indexTo"
            label="Индекс"
            isNumber
            placeholder={'Пример: 429046'}
          />
          <Input form={form} name="fio" label="Получатель" placeholder={'Пример: Иван Иванов Иванов'} />{' '}
          <Input
            form={form}
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неверный формат',
              },
            }}
            name="mail"
            label={'Почта'}
            placeholder={'Пример: mail@mail.ru'}
          />
          <Input
            form={form}
            name="phone"
            rules={{
              required: false,
              min: {
                value: 1000000000,
                message: 'Не полный номер',
              },
            }}
            label={
              <div>
                Телефон <span style={{ fontSize: '15px', opacity: '0.7' }}>(необязательно)</span>
              </div>
            }
            placeholder={'Пример: + 7 (111) 222-33-44'}
            isPhone
          />
          <div style={{ position: 'relative' }}>
            <Input
              form={form}
              rules={{ required: false }}
              name="telegram"
              label={
                <div>
                  Telegram <span style={{ fontSize: '15px', opacity: '0.7' }}>(необязательно)</span>
                </div>
              }
              style={{ paddingLeft: '36px' }}
            />
            <div class={'telegram-char'} style={{ fontWeight: '500', position: 'absolute', top: '49px', left: '15px', fontSize: '20px' }}>
              @
            </div>
          </div>
          <div className="mt-20" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(254px,1fr))', columnGap: '10px', rowGap: '20px' }}>
            {tariffList?.map((item) => (
              <TariffItem
                disabled={watchAddressTo?.precision !== 'HOUSE' && !calculateData}
                loading={calculateLoading}
                onClick={() => {
                  dispatch(setActiveTariff(item));
                }}
                price={item?.price}
                title={item?.title}
                active={item?.slug == activeTariff?.slug}
                icon={item?.icon}
                days={item?.days}
              />
            ))}
          </div>
        </div>
      </div>
      <PaymentList /> <CartTotal onSubmit={form.handleSubmit(onSubmit)} />
      {loading && <Loading />}
    </>
  );
};

export default PostCalculator;
