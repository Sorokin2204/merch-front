import React, { useEffect, useState } from 'react';
import styles from './SiteLayout.module.scss';

import { useDispatch } from 'react-redux';
import { authUser } from '../../../redux/actions/user/authUser';
import { ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartData } from '../../../utils/getCartData';
import { setActiveTheme, setCart } from '../../../redux/slices/app.slice';
import { socialData } from '../../../data';
import ThemeSwither from '../../../components/site/ThemeSwither/ThemeSwither';
const SiteLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  const {
    authUser: { data: authData, error: authError, loading: authLoading },
  } = useSelector((state) => state.user);
  const { cart, activeTheme } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(authUser());
    dispatch(setCart(getCartData()));
  }, []);

  useEffect(() => {
    if (!authData && authError && !authLoading && (pathname == '/profile' || pathname == '/profile/orders' || pathname == '/coupon' || pathname == '/profile/wallet' || pathname == '/profile/wallet/topup')) {
      navigate('/');
    }
  }, [pathname, authData, authError]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      {' '}
      <div className={`body ${activeTheme == 'dark' ? 'is__dark' : ''}`}>
        {' '}
        <ToastContainer />
        <header class="header__1 js-header" id="header">
          <div class="container">
            <div class="wrapper js-header-wrapper">
              <div class="header__logo">
                <Link to="/">
                  <img class="header__logo" id="logo_js" src="/img/logos/Logo.svg" alt="logo" />
                </Link>
              </div>
              <div class="header__menu">
                <ul class="d-flex space-x-20">
                  <li>
                    <Link to="/products" class="color_black">
                      {' '}
                      Каталог{' '}
                    </Link>
                  </li>{' '}
                  <li>
                    <Link to="/contact" class="color_black">
                      {' '}
                      Контакты{' '}
                    </Link>
                  </li>{' '}
                  <li>
                    <Link to="/faq" class="color_black">
                      {' '}
                      Вопросы{' '}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div class="header__search">
                <input type="text" placeholder="Search" />
                <button class="header__result">
                  <i class="ri-search-line"></i>
                </button>
              </div> */}{' '}
              <div class="header__btns" style={{ display: 'flex', alignItems: 'center' }}>
                {/* <a class="btn btn-grad btn-sm" href="Connect-wallet.html">
                  <i class="ri-wallet-3-line"></i>
                  Connect wallet
                </a> */}
                <div className="switch-theme">
                  {' '}
                  <ThemeSwither />
                </div>

                <Link to={'/cart'} class="btn btn-grad " style={{ position: 'relative' }}>
                  {cart?.length >= 1 && (
                    <div className="" style={{ position: 'absolute', top: '22px', left: '32px', width: '14px', height: '14px', color: '#fff' }}>
                      {' '}
                      <span style={{ zIndex: '1000', position: 'absolute', top: '-10px', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '10px' }}> {cart?.length}</span>
                      <i
                        class="ri-circle-fill
							            md "
                        style={{ color: '#36b37e', zIndex: '10', fontSize: '16px', display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></i>
                    </div>
                  )}
                  <i
                    class="ri-shopping-cart-line
							            md mr-1"></i>{' '}
                  Корзина
                </Link>
                <a href="" id="connectbtn">
                  <img width="45" src="assets/img/icons/metamask.svg" alt="" />
                </a>
              </div>
              <div
                class={`header__burger js-header-burger ${activeMenu ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setActiveMenu(!activeMenu);
                }}></div>
              <div class={`header__mobile js-header-mobile ${activeMenu ? 'visible' : ''}`} style={{ boxShadow: '0px 2px 4px rgba(126, 142, 177, 0.1215686275)' }}>
                <div class="header__mobile__menu space-y-40">
                  <ul class="d-flex space-y-20">
                    <li>
                      {' '}
                      <a class="color_black" href="Marketplace.html">
                        {' '}
                        Marketplace
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a class="color_black" href="Collections.html">
                        {' '}
                        Collections
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a class="color_black" href="Profile.html">
                        {' '}
                        Profile
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a class="color_black" href="Creators.html">
                        {' '}
                        Creators
                      </a>{' '}
                    </li>
                  </ul>
                  <div className="switch-theme-mob" style={{ marginTop: '30px' }}>
                    {' '}
                    <ThemeSwither />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer class="footer__1" style={{ paddingBottom: '20px' }}>
          <div class="container">
            <div class="row">
              <div class="col-lg-6 space-y-20">
                <div class="footer__logo">
                  <a href="/">
                    <img src="/img/logos/Logo.svg" alt="logo" />
                  </a>
                </div>
                <p class="footer__text">raroin is a shared liquidity NFT market smart contract</p>
                <div>
                  <ul class="footer__social space-x-10 mb-40">
                    {socialData?.map((social) => (
                      <li>
                        <Link to={social?.link}>
                          <i class={social?.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-12">
                <h6 class="footer__title">Меню</h6>
                <ul class="footer__list">
                  <li>
                    {' '}
                    <Link to="/products"> Товары </Link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-12">
                <ul class="footer__list" style={{ paddingTop: '47.2px' }}>
                  <li>
                    {' '}
                    <a href="Profile.html"> Контакты </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-12 ">
                <ul class="footer__list" style={{ paddingTop: '47.2px' }}>
                  <li>
                    {' '}
                    <a href="Upload-type.html">Вопросы </a>
                  </li>
                </ul>
              </div>
            </div>
            <p class="copyright text-center">Copyright © 2021. Created with love by creabik.</p>

            <Link to={'/privacy'} style={{ fontSize: '14px', color: '#6f7d95', marginTop: '20px', display: 'inline-block' }}>
              Пользовательское соглашение
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SiteLayout;
