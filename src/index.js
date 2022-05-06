import '../src/sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history.js';
import App from '../src/components/app/app.jsx';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './components/store/reducer.js';
import { fetchTicketsList } from './components/store/api-action';

const store = configureStore({reducer: reducer});

store.dispatch(fetchTicketsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);