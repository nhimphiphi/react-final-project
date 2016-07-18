import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import constants from '../constants';
import FilterLink from '../containers/FilterLink';

const FooterLink = () => (
  <div className="filter-link">
    <FilterLink filter={constants.SHOW_ALL}>
      <Link to={`/`}>All</Link>
    </FilterLink>
    <FilterLink filter={constants.SHOW_ACTIVE}>
      <Link to={`/active`}>Active</Link>
    </FilterLink>
    <FilterLink filter={constants.SHOW_COMPLETED}>
      <Link to={`/completed`}>Completed</Link>
    </FilterLink>
  </div>
)

export default FooterLink;