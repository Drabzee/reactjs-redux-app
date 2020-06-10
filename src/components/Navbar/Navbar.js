import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Redux App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink to="/" style={{ textDecoration: 'none' }} activeClassName="active" exact={true}>
              <li className="nav-item nav-link">Bakery Shop</li>
            </NavLink>
            <NavLink to="/users" style={{ textDecoration: 'none' }} activeClassName="active">
              <li className="nav-item nav-link">User List</li>
            </NavLink>
            <NavLink to="/todos" style={{ textDecoration: 'none' }} activeClassName="active">
              <li className="nav-item nav-link">Todos</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
