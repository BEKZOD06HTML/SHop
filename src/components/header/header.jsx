import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import useProductStore from '../../utils/store';

const Header = () => {
  const { getLikeCount, getCartCount } = useProductStore();

  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/korzina">Add Product</NavLink>
      <NavLink to="/like">
        Likes <span className="badge">{getLikeCount()}</span>
      </NavLink>
      <NavLink to="/todo">
        Cart <span className="badge">{getCartCount()}</span>
      </NavLink>
    </div>
  );
};

export default Header;
