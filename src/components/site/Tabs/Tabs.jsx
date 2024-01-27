import React from 'react';
import styles from './Tabs.module.scss';
const Tabs = ({ list, active, setActive }) => {
  return (
    <>
      <ul class="nav nav-tabs d-flex " role="tablist" style={{ rowGap: '10px' }}>
        {list?.map((item) => (
          <li
            class="nav-item"
            style={{ marginRight: '10px' }}
            onClick={() => {
              setActive(item);
            }}>
            <a class={`btn btn-white btn-sm ${item?.value == active ? 'active' : ''}`} data-toggle="tab" role="tab">
              {item?.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tabs;
