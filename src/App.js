import React from 'react';
import { Layout } from './redux/components/layout';
import AddTask from './redux/components/AddTask';
import FilterList from './redux/components/FilterList';
import VisibleTaskList from './redux/constants/VisibleTodoList';
export const ICON_SIZE = 'large';

const App = () => (
  <Layout
    sideMenu={<FilterList />}
    contentTop={<AddTask />}
    contentBottom={<VisibleTaskList />}
  />
);

export default App;