import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from "./components/Counter/Counter";
import CounterSlice from './components/Counter/CounterSlice';
import Comp from "@components/Comp";

import {Provider} from 'react-redux'
import {configureStore}  from '@reduxjs/toolkit';
import { UsersApi } from "./components/Counter/UsersApi";

const store = configureStore({
  reducer: {
    number: CounterSlice,
    [UsersApi.reducerPath]: UsersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UsersApi.middleware),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Comp /> 
     {/* <Counter /> */}
    </Provider>
  </React.StrictMode>
);