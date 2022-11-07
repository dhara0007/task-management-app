import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Collapse
} from '@material-ui/core';
import {
    Delete,
} from '@material-ui/icons';
import { ICON_SIZE } from '../../App';

const TaskItem = ({
  name,
  description,
  duedate,
  onDeleteClick
}) => {
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
  setOpen(!open);
};

const handleDeleteClick = () => onDeleteClick();
    return (
    <ListItem button onClick={handleClickOpen}> 
      <ListItemText primary={name} style={{textAlign: "center"}} />
      <Collapse in={open} style={{textAlign: "center"}} timeout="auto" unmountOnExit>  
      <ListItemText primary={description} />
      <ListItemText></ListItemText>
      <ListItemText primary={`${duedate} (yyyy-mm-dd)`} /> 
      </Collapse>
      <ListItemText></ListItemText>
      <ListItemSecondaryAction >
        <IconButton
          edge="end"
          aria-label="delete the task"
          onClick={handleDeleteClick}>
          <Delete color="secondary" fontSize={ICON_SIZE} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

TaskItem.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  duedate:PropTypes.string.isRequired,
};

export default TaskItem;
