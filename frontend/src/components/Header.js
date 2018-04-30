import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ branding }) => (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand branding">{branding.name}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <span className="navbar-text">
            <NavLink className="nav-link" to='/login'>
                Login
            </NavLink>
        </span>
      </div>
    </nav>
);

export default Header;