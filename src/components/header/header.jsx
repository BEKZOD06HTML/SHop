import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import useProductStore from '../../utils/store';

const Header = () => {
  const { getLikeCount, getCartCount } = useProductStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem('accessToken'));
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.dispatchEvent(new Event('storage'));
    navigate('/login', { replace: true });
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
        <NavLink to="/products">product</NavLink>
      {isAuthenticated ? (
        <>
          <NavLink to="/korzina">Add Product</NavLink>
          <NavLink to="/profile">Profil</NavLink>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};

export default Header;
