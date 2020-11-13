import React from "react";
import { NavLink } from "react-router-dom";

import './sidebar-item.styles.scss'

function SidebarItem({ Icon, title, route }) {
  return (
    <NavLink exact to={`${route}`} className='sidebar-icon-container' activeClassName='active-link'>
      <Icon className='sidebar-icon' />
      <p>{title}</p>
    </NavLink>
  );
}

export default SidebarItem;
