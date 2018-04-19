import React from 'react';
import { Nav, NavItem } from 'reactstrap';

const Header = ({ branding }) => (
	<Nav>
    <NavItem tag={() => (
    	<a className="navbar-brand">{branding.name}</a>
    )} />
    { /* <NavItem>
      <NavLink href="#">Link</NavLink>
    </NavItem> */ }
  </Nav>
);

export default Header;