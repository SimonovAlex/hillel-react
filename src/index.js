import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from "./components/Counter/Counter";
import CounterSlice from './components/Counter/CounterSlice';

import {Provider} from 'react-redux'
import {configureStore}  from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    number: CounterSlice
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <Counter />
    </Provider>
  </React.StrictMode>
);