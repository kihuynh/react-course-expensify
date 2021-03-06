import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//import action generator from actions expenses to allow remove function.
//Connect the component to access dispatch. So it has a way to change the store with remove and edit
//Wire up onclick like the one in expense list filters
const ExpenseListItem = ({description, id, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      Date: {moment({createdAt}).format('MMMM Do, YYYY')}
      |
      Amount:{numeral(amount / 100).format('$0,0.00')}
    </p>
  </div>
);


//export default ListItem
export default ExpenseListItem;

//Why this file doesn't take mapStateToProps
//You need mSTP when you need a piece of the state from the store.
//But this file is being rendered in ExpenseList so it's receiving the props from there.
// <button onClick={() => {
//   dispatch(removeExpense({id}));
// }}>Remove</button>
