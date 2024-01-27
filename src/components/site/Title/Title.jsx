import React from 'react';
import styles from './Title.module.scss';
const Title = ({ children }) => {
  return (
    <div class="container py-30">
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
