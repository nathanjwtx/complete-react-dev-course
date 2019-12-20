import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import FilterListItem from './FilterItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{props.expenses.map((e) => {
			return <ExpenseListItem key={e.id} {...e}/>
		})}
		{/* <FilterListItem {...props.filters} /> */}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
