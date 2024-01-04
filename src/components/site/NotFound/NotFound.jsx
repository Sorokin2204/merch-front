import React from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
      <div class="not__found">
        <div class="container">
          <div class="row justify-content-center align-items-center pt-100">
            <div class="col-lg-3 d-none d-lg-block"></div>
            <div class="col-lg-6">
              <div class="space-y-30 content">
                <div
                  class="space-y-20 d-flex flex-column
			                        justify-content-center align-items-center">
                  <img src="/img/bg/404.png" alt="" />
                  <h2 class="text-center">Страница не найдена</h2>
                  <div class="text-center">Вернитесь на главную страницу</div>
                  <div>
                    <Link to="/" class="btn btn-grad">
                      На главную
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 d-none d-lg-block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
