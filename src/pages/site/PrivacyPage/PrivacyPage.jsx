import React from 'react';
import styles from './PrivacyPage.module.scss';
const PrivacyPage = () => {
  return (
    <>
      <div class="hero_privacy">
        <div class="container">
          <div class="d-flex jusitify-content-center align-items-center space-x-10">
            <h1 class="text-left">
              Пользовательское соглашение
              <i class="ri-file-text-fill privacy__icon " style={{ marginLeft: '10px' }}></i>
            </h1>
          </div>
        </div>
      </div>
      <div class="privacy__page">
        <div class="container">
          <div class="box space-y-30" style={{ padding: '60px 30px' }}>
            <div class="law-text"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
