import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import constants from '../constants';
import FilterLink from '../containers/FilterLink';

const FooterLink = () => (
  <div className="filter-link">
    <FilterLink filter={constants.SHOW_ALL}>
<<<<<<< HEAD
      All
    </FilterLink>
    <FilterLink filter={constants.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={constants.SHOW_COMPLETED}>
      Completed
=======
      <Link to={`/`}>All</Link>
    </FilterLink>
    <FilterLink filter={constants.SHOW_ACTIVE}>
      <Link to={`/active`}>Active</Link>
    </FilterLink>
    <FilterLink filter={constants.SHOW_COMPLETED}>
      <Link to={`/completed`}>Completed</Link>
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
    </FilterLink>
  </div>
)

<<<<<<< HEAD
export default FooterLink;
=======
export default FooterLink;
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
