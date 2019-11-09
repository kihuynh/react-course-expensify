import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensive</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home Base</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  </header>
);

export default Header;
