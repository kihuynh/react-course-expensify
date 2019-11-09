import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        Edit, ass.
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick ={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (expense) => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// Edit needs to take in current information from the store. Because Add Expense doesn't neeed it because you are setting the values for it. Edit takes pre-existing ones.
// mapStateToProps gives the component the current expense object. expense array lives in the state. add props in second argument. from the HOC.
