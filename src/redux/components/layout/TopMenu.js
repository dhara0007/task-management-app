import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}> 
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
        Task Management App 
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
