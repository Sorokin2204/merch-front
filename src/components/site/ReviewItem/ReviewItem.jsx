import React from 'react';
import styles from './ReviewItem.module.scss';
import moment from 'moment';
const ReviewItem = ({ author, text, date, link }) => {
  return (
    <>
      <div>
        <div class="d-flex align-items-center space-x-15 mb-10">
          <div class="avatars space-x-10">
            {/* <div class="media has_border" style={{ background: '#566ffe' }}>
              <a href="Profile.html">
                <div className="" style={{ width: '50px', height: '50px', borderRadius: '50px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '500' }}>
                  
                </div>
              </a>
            </div> */}
            <div class="text-center">
              <a href={link} target="_blank">
                <p class="avatars_name color_brand">{author}</p>
              </a>
            </div>
          </div>
          <div class="reaction mb-0">
            <span class="time mb-0 space-x-3">
              <i class="ri-time-line"></i>
              <span>{moment(date).fromNow().toString()}</span>
            </span>
          </div>
          <div class="stars d-flex justify-content-center space-x-5" style={{ marginLeft: 'auto', color: '#FFC700' }}>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
        </div>
        <div class="">
          {/* <div class="v__line "></div> */}
          <div class="space-y-20">
            <p class="forum__desc">{text}</p>

            {/* <div class="reaction space-x-15"></div> */}
            <div class="hr"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
