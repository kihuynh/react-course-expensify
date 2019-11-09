import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
})

test('should set up edit action', ()=> {
  const actionEdit = editExpense('321', { note: 'New'});
  expect(actionEdit).toEqual({
    type: 'EDIT_EXPENSE',
    id: '321',
    updates: {
      note: 'New'
    }
  });
});

test('should setup add expense object with provided values', () => {
  const expenseData = {
    description: 'biss',
    amount: 109500,
    createdAt: 5000,
    note: 'This was biss rent'
  }
  const actionAdd = addExpense(expenseData);
  expect(actionAdd).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should set up add expense action object with default values', () => {
  const actionDefaultAdd = addExpense();
  expect(actionDefaultAdd).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  });
});
