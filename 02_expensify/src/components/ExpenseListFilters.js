import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.filterBy} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
      console.log(e.target.value);
    }}
    />
    <select
      value={props.filters.sortBy} onChange={(e) => {
      console.log(e.target.value);
      e.target.value === 'amount' ?
        props.dispatch(sortByAmount(e.target.value)) : props.dispatch(sortByDate(e.target.value));
    }}>
      <option value={'date'}>Date</option>
      <option value={'amount'}>Amount</option>
    </select>
  </div>
);

// first call: map state to props
// second call: component
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);