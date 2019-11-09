import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newItem = {
    id: '4',
    description: 'Bubble Tea',
    note: '',
    amount: 550,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    newItem
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expenses[3]]);
});

// MY VERSION -- not quite right but it still worked.
// test('should edit an expense', () => {
//   const editItem = {
//     id: '1',
//     description: 'Black Coffee',
//     note: '',
//     amount: 250,
//     createdAt: 0
//   }
//   const action = {
//     type: 'EDIT_EXPENSE',
//     id: '1',
//     updates: editItem
//   };
//   const state = expensesReducer(expenses, action);
//   expect(state).toEqual([editItem, expenses[1], expenses[2]]);
// });

test('should edit an expense', () => {
  const editItem = {
    id: expenses[0].id,
    description: 'Black Coffee',
    note: '',
    amount: 250,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      ...editItem
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([editItem, expenses[1], expenses[2]]);
});


test('should not edit expense if expense is not found', () => {
  const editItem = {
    id: '40',
    description: 'Coffee',
    note: '',
    amount: 300,
    createdAt: 0
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '40',
    updates: { ...editItem }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
