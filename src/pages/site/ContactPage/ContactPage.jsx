import React from 'react';
import styles from './ContactPage.module.scss';
import { Link } from 'react-router-dom';
import { productList, socialData } from '../../../data';
const ContactPage = () => {
  return (
    <>
      <div class="hero_questions bg_white">
        <div class="container">
          <div class="space-y-20">
            <h1 class="text-center">Контакты</h1>
          </div>
        </div>
      </div>
      <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div class="more mt-100 " style={{ maxWidth: '42rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
          {socialData?.map(({ link, icon, name }) => (
            <div class="more_box visible position-relative d-flex justify-content-start align-items-center " style={{ height: '100px', padding: '20px' }}>
              <ul class="space-y-10">
                <li>
                  <Link to={link} class="space-x-10 d-flex">
                    <i class={icon} style={{ color: '#566ffe', fontSize: '30px' }}></i>
                    <span style={{ fontSize: '20px' }}> {name}</span>
                  </Link>
                </li>
              </ul>
            </div>
          ))}
          <div className="article_page" style={{ margin: '0 auto', gridColumn: '1/3', marginTop: '40px' }}>
            <div className="content" style={{ padding: '10px 0 30px 0' }}>
              <div className="inner">
                <div className="snippet">
                  <p>
                    <strong>Handshake release assets</strong>&nbsp;validation metrics first mover advantage ownership prototype. Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply chain interaction design.&nbsp; &nbsp;Pitch analytics assets.{' '}
                    <a href="#">Link</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
