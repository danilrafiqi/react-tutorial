import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={{ margin: '200px 0' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about" replace>
        About
      </NavLink>
      <NavLink to="/privacy">Privacy</NavLink>
      <NavLink
        to={{
          pathname: '/contact',
          search: '?sort=name',
          hash: '#the-hash',
          state: { fromDashboard: true },
        }}>
        Contact
      </NavLink>
      <NavLink to="/page1?sort=name">Page1</NavLink>
      <NavLink
        to="/page2?sort=name"
        activeStyle={{ backgroundColor: 'red', color: 'white' }}>
        Page2
      </NavLink>
      <NavLink to="/page3">Page3</NavLink>
    </div>
  );
};

export default Nav;
