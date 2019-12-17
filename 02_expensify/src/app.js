import React from 'react';
import ReactDOM from 'react-dom';

import { AppRouter } from "./routers/AppRouter";
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import expenseSelector from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  const visible = expenseSelector(state.expenses, state.filters);
  console.log(visible);
});

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


console.log(store.getState());


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
