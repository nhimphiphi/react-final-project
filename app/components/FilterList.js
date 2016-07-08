import React from 'react';
import Filter from './Filter';
import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED
} from '../constants';

const FilterList = () => (
  <div className="filter-list nav nav-pills">
    <Filter filter={FILTER_ALL}>All</Filter>
    <Filter filter={FILTER_ACTIVE}>Active</Filter>
    <Filter filter={FILTER_COMPLETED}>Completed</Filter>
  </div>
);

export default FilterList;
