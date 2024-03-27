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
import OutsideClickHandler from 'react-outside-click-handler';
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
                  <img class="header__logo" id="logo_js" src={activeTheme == 'dark' ? '/img/gg-logo-white.png' : '/img/gg-logo-black.png'} alt="logo" />
                </Link>
              </div>
              <div class="header__menu">
                <ul class="d-flex space-x-25" style={{ fontWeight: '600' }}>
                  <li>
                    <Link to="/products" class="color_black">
                      {' '}
                      Магазин{' '}
                    </Link>
                  </li>{' '}
                  {/* <li>
                    <Link to="/faq" class="color_black">
                      {' '}
                      FAQ{' '}
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/contact" class="color_black">
                      {' '}
                      Контакты{' '}
                    </Link>
                  </li>{' '}
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

                <Link to={'/cart'} class="btn btn-grad " style={{ position: 'relative' }}>
                  {cart?.length >= 1 && (
                    <div className="" style={{ position: 'absolute', top: '21px', left: '35px', width: '14px', height: '14px', color: '#fff' }}>
                      {' '}
                      <span style={{ zIndex: '1000', position: 'absolute', top: '-10px', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '10px' }}> {cart?.length}</span>
                      <i
                        class="ri-circle-fill
							            md "
                        style={{ color: '#000', zIndex: '10', fontSize: '16px', display: 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></i>
                    </div>
                  )}
                  <i
                    class="ri-shopping-cart-line
							            "></i>{' '}
                </Link>
                <a href="" id="connectbtn">
                  <img width="45" src="assets/img/icons/metamask.svg" alt="" />
                </a>
              </div>
              <div
                class={`header__burger js-header-burger ${activeMenu ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (activeMenu) {
                    setActiveMenu(false);
                  } else {
                    setActiveMenu(true);
                  }
                }}></div>
              <div class={`header__mobile js-header-mobile ${activeMenu ? 'visible' : ''}`} style={{ boxShadow: '0px 2px 4px rgba(126, 142, 177, 0.1215686275)' }}>
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setTimeout(() => {
                      if (activeMenu) {
                        setActiveMenu(false);
                      }
                    }, 50);
                  }}>
                  <div class="header__mobile__menu space-y-40">
                    <ul class="d-flex space-y-20">
                      <li>
                        {' '}
                        <Link
                          onClick={() => {
                            setActiveMenu(false);
                          }}
                          to="/products"
                          class="color_black">
                          {' '}
                          Магазин{' '}
                        </Link>
                      </li>{' '}
                      {/* <li>
                        {' '}
                        <Link
                          onClick={() => {
                            setActiveMenu(false);
                          }}
                          to="/faq"
                          class="color_black">
                          {' '}
                          FAQ{' '}
                        </Link>
                      </li> */}
                      <li>
                        {' '}
                        <Link
                          onClick={() => {
                            setActiveMenu(false);
                          }}
                          to="/contact"
                          class="color_black">
                          {' '}
                          Контакты{' '}
                        </Link>
                      </li>
                    </ul>
                  </div>{' '}
                </OutsideClickHandler>
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
                    <img src={activeTheme == 'dark' ? '/img/gg-logo-white.png' : '/img/gg-logo-black.png'} alt="logo" />
                  </a>
                </div>
                <p class="footer__text">
                  Играем и делаем классные штуки<i class="ri-heart-fill" style={{ fontSize: '15px', marginLeft: '3px', color: '#eb5757' }}></i>
                </p>
                <div>
                  <ul class="footer__social space-x-15 mb-20">
                    {socialData?.map((social) => (
                      <li>
                        <a target="_blank" href={social?.link}>
                          {social?.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-12">
                <ul class="footer__list" style={{ paddingTop: '55px' }}>
                  <li>
                    {' '}
                    <Link to="/products"> Магазин </Link>
                  </li>
                </ul>
              </div>{' '}
              {/* <div class="col-lg-2 col-12 ">
                <ul class="footer__list" style={{ paddingTop: '55px' }}>
                  <li>
                    {' '}
                    <Link to="/faq"> FAQ </Link>
                  </li>
                </ul>
              </div> */}
              <div class="col-lg-2 col-12">
                <ul class="footer__list" style={{ paddingTop: '55px' }}>
                  <li>
                    {' '}
                    <Link to="/contact"> Контакты </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="switch-theme">
              {' '}
              <ThemeSwither />
            </div>
            <p class="copyright text-center">GAMIGOODS © 2024 </p>

            <Link class="mx-auto d-flex justify-content-center privacy" to={'/privacy'} style={{ fontSize: '14px', marginTop: '20px', display: 'inline-block' }}>
              <span> Пользовательское соглашение</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SiteLayout;
