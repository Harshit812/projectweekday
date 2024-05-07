import React from 'react';
import { createRoot } from 'react-dom/client';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';

import weekdayJobsReducer from './redux/reducers/weekdayJobsReducer';

const store = createStore(weekdayJobsReducer, applyMiddleware(thunk));
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
