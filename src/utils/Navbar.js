import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

import './Navbar.css';

export const Navbar = ({ brand }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const handlerLogout = (e) => {
    e.preventDefault();
    navigate('/login', {
      replace: true
    });
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <div className="container">
        <Link to="/" className="navbar-brand">{ brand }</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/marvel"
                className={({isActive}) => {
                  return "nav-link "+(isActive ? 'active' : '');
                }}>Marvel</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dc"
                className={({isActive}) => {
                  return "nav-link "+(isActive ? 'active' : '');
                }}>DC</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                className={({isActive}) => {
                  return "nav-link "+(isActive ? 'active' : '');
                }}>Search</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link text-capitalize">
                { (user.logged) && user.name }
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="/login" onClick={handlerLogout} className="nav-link pointer">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
