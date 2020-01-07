import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";

// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
//   <div>
//     <h2>{description}</h2>
//     <p>Amount: {amount}</p>
//     <p>Created: {createdAt}</p>
//     <button onClick={() => {
//       dispatch(removeExpense({ id }));
//     }}>Remove</button>
//   </div>
// );

const ExpenseListItem = (props) => (
  <div>
    <h2>{props.description}</h2>
    <p>Amount: {props.amount}</p>
    <p>Created: {props.createdAt}</p>
    <button onClick={() => {
      props.dispatch(removeExpense({id: props.id}));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
