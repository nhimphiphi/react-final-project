import React, { PropTypes } from 'react';
import NavLink from './NavLink';

const Filter = ({ filter, children }) => (
  <NavLink to={filter === 'all' ? '' : filter}>
    {children}
  </NavLink>
);

Filter.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired
};

export default Filter;
