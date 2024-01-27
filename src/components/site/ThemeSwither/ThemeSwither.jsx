import React from 'react';
import styles from './ThemeSwither.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActiveTheme } from '../../../redux/slices/app.slice';
const ThemeSwither = () => {
  const dispatch = useDispatch();
  const { cart, activeTheme } = useSelector((state) => state.app);
  return (
    <>
      {' '}
      <div class="mode_switcher space-x-10" style={{ marginRight: '10px' }}>
        <a
          style={{ cursor: 'pointer', userSelect: 'none', width: '38px', height: '31px' }}
          onClick={() => {
            dispatch(setActiveTheme('light'));
            localStorage.removeItem('theme-dark');
          }}
          class={`light d-flex align-items-center  ${activeTheme == 'light' ? 'is_active' : ''}`}>
          <i class="ri-sun-fill" style={{ marginRight: 0, paddingLeft: '1px' }}></i>
        </a>
        <a
          style={{ cursor: 'pointer', userSelect: 'none', width: '38px', height: '31px' }}
          onClick={() => {
            dispatch(setActiveTheme('dark'));
            localStorage.setItem('theme-dark', true);
          }}
          class={`dark d-flex align-items-center ${activeTheme == 'dark' ? 'is_active' : ''}`}>
          <i class="ri-moon-fill" style={{ marginRight: 0, marginLeft: '1px' }}></i>
        </a>
      </div>
    </>
  );
};

export default ThemeSwither;
