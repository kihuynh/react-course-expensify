import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Money, ass.</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// ExpenseForm's onSubmit contains the props from the form. In the context of this.props.onSubmit({INSIDE}). The INSIDE takes the state of each props. Props defined in the Actions/Expenses/{addExpense}. So onSubmit takes all that information. And on this AddExpensePage the ExpenseForm components onSubmit takes in the props which is named expense. For it to be connected to redux. Import connect and add connect() to the export default at the bottom. Which allows us to use props.dispatch. Similar to the app.js file. But in this file, it is saying do a dispatch, and to addExpense to the expense props that is collected from the Form. Then props.history.push redirects the user back to the home page after adding in an expense
