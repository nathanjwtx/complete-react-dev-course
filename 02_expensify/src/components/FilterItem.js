import React from 'react';

export default ({ filterBy, sortBy }) => {
  // console.log(filterBy);
  return (
    <div>
      <h2>Filters List</h2>
      <p>filter by: {filterBy}</p>
      <p>sort by: {sortBy}</p>
    </div>
)};