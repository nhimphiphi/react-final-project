import React from 'react';
import Filter from './Filter';

const FilterList = () => (
  <div className="filter-list nav nav-pills">
    <Filter filter="all">All</Filter>
    <Filter filter="active">Active</Filter>
    <Filter filter="completed">Completed</Filter>
  </div>
);

export default FilterList;
