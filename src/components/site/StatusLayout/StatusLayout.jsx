import React from 'react';
import styles from './StatusLayout.module.scss';
import { Link } from 'react-router-dom';
const StatusLayout = ({ color, title, text, btnColor, icon }) => {
  return (
    <>
      <div class="not__found" style={{ paddingBottom: '30px' }}>
        <div class="container">
          <div class="row justify-content-center align-items-center pt-100">
            <div class="col-lg-3 d-none d-lg-block"></div>
            <div class="col-lg-6">
              <div class="space-y-30 content">
                <div
                  class="space-y-20 d-flex flex-column
			                        justify-content-center align-items-center">
                  <i class={icon} style={{ fontSize: '100px', color: color, marginTop: '0px' }}></i>

                  <h2 class="text-center">{title}</h2>
                  <div class="text-center">{text}</div>
                  <div>
                    <Link to="/" class={`btn ${btnColor}`} style={{}}>
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

export default StatusLayout;
