import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './router';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);

