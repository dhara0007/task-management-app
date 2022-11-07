import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { ListItem, TextField, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { AddTaskAction } from '../actions/AddTaskAction';
import { ICON_SIZE } from '../../App';

const AddTask = ({ AddTaskAction }) => {
  const [inputTextName, setInputTextName] = useState('');
  const [inputTextDescription, setInputTextDescription] = useState('');
  const values = {
    someDate: new Date().toISOString().substring(0, 10)
  };
  const [inputTextDate, setInputTextDate] = React.useState(values.someDate);
  const inputElement = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    AddTaskAction(inputTextName,inputTextDescription,inputTextDate);
    setInputTextName('');
    setInputTextDescription('');
    setInputTextDate(values.someDate);
    inputElement.current.focus();
  }

  return (
    <ListItem 
      component="form"
      onSubmit={onSubmit}>
      <IconButton 
        edge="start" 
        aria-label="create new task"
        type="submit">
        <AddCircleIcon color="primary" fontSize={ICON_SIZE} />
      </IconButton>
      <TextField
        ref={inputElement}
        value={inputTextName}
        onChange={e => setInputTextName(e.target.value)}
        id="outlined-basic"
        label="Task Name"
        variant="outlined"
        required
        fullWidth/>
      <TextField
        ref={inputElement}
        value={inputTextDescription}
        onChange={e => setInputTextDescription(e.target.value)}
        id="outlined-basic"
        label="Task Description"
        variant="outlined"
        required
        fullWidth/>
      <TextField
      ref={inputElement}
      value={inputTextDate}
      onChange={e => setInputTextDate(e.target.value)}
      id="outlined-basic"
      label="Task Deadline"
      variant="outlined"
      required
      fullWidth
      type="date"/>
    </ListItem>

  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddTaskAction: (name,description,duedate) => dispatch(AddTaskAction(name,description,duedate))
  }
}

export default connect(null, mapDispatchToProps)(AddTask);
