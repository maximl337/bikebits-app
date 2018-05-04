import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ branding }) => (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand branding">{branding.name}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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