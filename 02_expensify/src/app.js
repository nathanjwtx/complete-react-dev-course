import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppRouter } from "./routers/AppRouter";
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import expenseSelector from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

const waterBill = store.dispatch(addExpense({
  description: 'water bill',
  amount: 50000,
  createdAt: 1000
}));

const gasBill = store.dispatch(addExpense({
  description: 'gas bill',
  amount: 40000,
  createdAt: 1500
}));

store.dispatch(setTextFilter({sortDescription: 'water'}));
const state = store.getState();
const visible = expenseSelector(state.expenses, state.filters);
// console.log(visible);
// console.log(state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

