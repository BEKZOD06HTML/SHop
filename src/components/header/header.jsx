import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import useProductStore from '../../utils/store';

const Header = () => {
  const { getLikeCount, getCartCount } = useProductStore();
  const isAuthenticated = localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };

  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/like">
        Likes <span className="badge">{getLikeCount()}</span>
      </NavLink>

      <NavLink to="/todo">
        Cart <span className="badge">{getCartCount()}</span>
      </NavLink>

      {isAuthenticated ? (
        <>
          <NavLink to="/korzina">Add Product</NavLink>
          <NavLink to="/profil">Profil</NavLink>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};

export default Header;