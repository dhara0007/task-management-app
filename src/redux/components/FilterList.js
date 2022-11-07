import React from 'react';
import List from '@material-ui/core/List';
import FilterLink from '../constants/FilterLink';
import { ActionTypes } from '../constants/ActionTypes';

const FilterList = () => (
  <List>
    <FilterLink filter={ActionTypes.SHOW_ALL} >
      All
    </FilterLink>
    <FilterLink filter={ActionTypes.SHOW_TODO}>
    To Do 
    </FilterLink>
    <FilterLink filter={ActionTypes.SHOW_INPROGRESS}>
    In Progress    
    </FilterLink>
    <FilterLink filter={ActionTypes.SHOW_DONE}>
      Done
    </FilterLink>
  </List>
);

export default FilterList;
