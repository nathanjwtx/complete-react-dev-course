import React from 'react';
import { connect } from 'react-redux';

// connect to the store to keep input and filterBy value match

const ExpenseListFilters = () => (
  <div>
    <input type="text" />
  </div>
)

// first call: map state to props
// second call: component
const mapStateToProps = (state) => {
  return {
    filters
  }
}
export default connect()(ExpenseListFilters);