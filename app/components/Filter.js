import React, { PropTypes } from 'react';

const Filter = ({ filter, children }) => (
  <li>
    <a
      href="#"
      className={`text-center filter filter-${filter}`}
    >
      {children}
    </a>
  </li>
);

Filter.propTypes = {
  filter: PropTypes.string,
  children: PropTypes.element
};

export default Filter;
