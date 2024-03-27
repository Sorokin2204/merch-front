import React from 'react';
import styles from './ProductSinglePage.module.scss';
import ReviewItem from '../../../components/site/ReviewItem/ReviewItem';
import { useLocation, useParams } from 'react-router';
import { productList } from '../../../data';
import { useEffect } from 'react';
import { useState } from 'react';
import NotFound from '../../../components/site/NotFound/NotFound';
import { Link } from 'react-router-dom';
import Tabs from '../../../components/site/Tabs/Tabs';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { getProductReviews } from '../../../redux/actions/app/getProductReviews';
import ShareButton from '../../../components/site/ShareButton/ShareButton';
import { ToastContainer, toast } from 'react-toastify';
import { currencyFormat } from '../../../utils/currencyFormat';
import Swiper from 'react-id-swiper';
import { setCart } from '../../../redux/slices/app.slice';
import { getCartData } from '../../../utils/getCartData';
import { addToCart } from '../../../utils/addToCart';

const ProductSinglePage = () => {
  const { slug } = useParams();
  const [activeProduct, setActiveProduct] = useState(undefined);
  const disaptch = useDispatch();
  const {
    getProductReviews: { data: productReviews },
    cart,
  } = useSelector((state) => state.app);
  useEffect(() => {
    if (slug) {
      const findProduct = productList?.find((item) => item?.slug == slug);
      if (findProduct) {
        setActiveProduct(findProduct);
        disaptch(getProductReviews(findProduct?.id));
      } else {
        setActiveProduct(null);
      }
    } else {
      setActiveProduct(undefined);
    }
  }, [slug]);
  const tabs = [
    { label: 'Описание', value: 1 },
    { label: 'Детали', value: 2 },
    { label: 'Авторы', value: 3 },
  ];
  const [activeTypeCountry, setActiveTypeCountry] = useState({ label: 'Описание', value: 1 });
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
  const dispatch = useDispatch();
  return activeProduct === null ? (
    <NotFound />
  ) : activeProduct ? (
    <div class="container">
      <Link to="/products" class="btn btn-white btn-sm my-40">
        Назад
      </Link>

      <div class="item_details">
        <div class="row sm:space-y-20" style={{ alignItems: 'start' }}>
          <div class="col-lg-6" style={{ position: 'relative' }}>
            {/* <div className="" style={{ position: 'absolute', top: '50%', transform: 'translateY(-60%)', left: '24px' }}>
              <a href="/" class="btn btn-white btn-sm " style={{ padding: '6px' }}>
                <i class="ri-arrow-left-s-line"></i>
              </a>
            </div>{' '}
            <div className="" style={{ position: 'absolute', top: '50%', transform: 'translateY(-60%)', right: '24px' }}>
              <a href="/" class="btn btn-white btn-sm " style={{ padding: '6px' }}>
                <i class="ri-arrow-right-s-line"></i>
              </a>
            </div> */}
            <Swiper {...params}>
              {activeProduct?.image?.map((item) => (
                <div>
                  <img class="item_img" src={item} alt="" />
                </div>
              ))}
            </Swiper>
          </div>

          <div class="col-lg-6">
            <div class="space-y-20">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>{activeProduct?.name}</h3>
                <div style={{ marginLeft: 'auto' }}>
                  {' '}
                  <ShareButton />
                </div>
              </div>
              {/* <div class="d-flex justify-content-between"> </div> */}
              {/* <div class="space-x-10 d-flex align-items-center">
                  <p>1 of 1</p>{' '}
                  <a href="#" class="likes space-x-3" onClick={() => {}}>
                    <i class="ri-heart-3-fill"></i>
                    <span class="txt_sm">2.1k</span>
                  </a>
                </div> */}
              {/* <div class="space-x-10 d-flex align-items-center mr-20">
                  <div class="share">
                    <div class="icon">
                      <a href="#">
                        {' '}
                        <i class="ri-share-line"></i>
                      </a>
                    </div>
                    <div class="dropdown__popup">
                      <ul class="space-y-10">
                        <li>
                          {' '}
                          <a href="">
                            {' '}
                            <i class="ri-facebook-line"></i>
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="">
                            {' '}
                            <i class="ri-messenger-line"></i>
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="">
                            {' '}
                            <i class="ri-whatsapp-line"></i>
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="">
                            {' '}
                            <i class="ri-youtube-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              <div class="card__item" style={{ transform: 'none', maxWidth: 'none' }}>
                <div class="space-y-20">
                  {' '}
                  <Tabs list={tabs} active={activeTypeCountry?.value} setActive={setActiveTypeCountry} />
                  <div class="hr"></div>
                  <div class="tab-content">
                    <div class="tab-pane active" role="tabpanel">
                      {activeTypeCountry?.value == 1 ? activeProduct?.desc : activeTypeCountry?.value == 2 ? activeProduct?.specs : activeTypeCountry?.value == 3 ? activeProduct?.authors : <></>}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="hr2"></div> */}
              <div class="d-flex space-x-20">
                <div className="h3" style={{ fontWeight: '600' }}>
                  {currencyFormat(activeProduct?.price)}
                </div>
              </div>{' '}
              {cart?.find((cartItem) => cartItem?.id == activeProduct?.id) ? (
                <Link to={'/cart'} class="btn btn-green btn-lg" style={{ height: '46.3px' }}>
                  <i class="ri-check-line" style={{ marginRight: '6px', fontSize: '20px' }}></i>В корзине
                </Link>
              ) : (
                <a
                  class="btn btn-primary btn-lg"
                  onClick={() => {
                    addToCart({ id: activeProduct.id });
                    toast.success('Товар добавлен в корзину', {
                      position: 'bottom-right',
                      autoClose: 2000,
                    });

                    dispatch(setCart(getCartData()));
                  }}>
                  В корзину
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" article_page" style={{ margin: '0 auto', marginTop: '40px' }}>
        <div className="content" style={{ padding: '10px 0 0px 0' }}>
          <div className="inner">
            <div className="snippet">{activeProduct?.content}</div>
          </div>
        </div>
      </div>

      {productReviews?.length !== 0 && (
        <div className="col-lg-8 mx-auto">
          {' '}
          <h3 class="mb-20 mt-100"> ⭐ Отзывы </h3>
          <div className="forum">
            <div className="forum__content">
              <div class="box answers__box is__big space-y-20">
                {productReviews?.map((item) => (
                  <ReviewItem {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default ProductSinglePage;
