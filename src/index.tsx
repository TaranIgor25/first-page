import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './router';

import './styles/global.scss';
import { Provider } from 'react-redux';
import { store } from './components/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <Router />
    {/* </React.StrictMode>  */}
  </Provider>
);

