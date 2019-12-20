import React from 'react';

// export default ({ description, amount, createdAt }) => (
//   <div>
//     <h2>{description}</h2>
//     <p>Amount: {amount}</p>
//     <p>Created: {createdAt}</p>
//   </div>
// );

export default (props) => (
  <div>
    <h2>{props.description}</h2>
    <p>Amount: {props.amount}</p>
    <p>Created: {props.createdAt}</p>
  </div>
)
