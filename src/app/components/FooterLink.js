import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import constants from '../constants';
import FilterLink from '../containers/FilterLink';

const FooterLink = () => (
  <div className="filter-link">
    <FilterLink filter={constants.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={constants.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={constants.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default FooterLink;
