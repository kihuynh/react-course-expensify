import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    Total Transactions: {props.expenses.length}
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map((items) => {
          return <ExpenseListItem key={items.id} {...items} />;
        })
      )
    }
  </div>
);
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

//Will be imported in ExpenseDashboardPage
export default connect(mapStateToProps)(ExpenseList);
