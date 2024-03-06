import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './scss/variables.scss';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { store } from './store.ts';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
