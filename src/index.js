import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/plugins/bootstrap.min.css';
import './css/plugins/remixicon.css';
import './scss/style.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import 'moment/locale/ru';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/swiper.css';

import moment from 'moment';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
moment.locale('ru');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
