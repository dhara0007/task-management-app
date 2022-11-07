import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskClick, onTaskDeleteClick }) => 
(
  <List>
    {tasks.map((task) => {
      return (
       
        <TaskItem
          key={task.id}
          {...task}
          onClick={() => onTaskClick(task.id)}
          onDeleteClick={() => onTaskDeleteClick(task.id)}
        />
      );
    })}
  </List>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description:PropTypes.string.isRequired,
      duedate:PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTaskDeleteClick: PropTypes.func.isRequired,
};

export default TaskList;
