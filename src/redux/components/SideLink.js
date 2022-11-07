import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const SideLink = ({ active, children, icon, onClick }) => (
  <ListItem 
    button 
    selected={active} 
    onClick={onClick}
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText>{children}</ListItemText>
  </ListItem>
);
SideLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired
}

export default SideLink;
