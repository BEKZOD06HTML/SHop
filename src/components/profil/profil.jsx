import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import API from '../../utils/API';
import './profil.css';

const Profil = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    API.get('/auth/me').then(res => {
      setUser(res.data);
    }).catch(err => console.error('Xatolik:', err));
  }, []);

  if (!localStorage.getItem('accessToken')) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="profile-container">
      <h1>Profil</h1>
      <div className="profile-card">
        <img src={user.image} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h2>{user.firstName} {user.lastName}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefon:</strong> {user.phone}</p>
          <p><strong>Yoshi:</strong> {user.age}</p>
          <p><strong>Jinsi:</strong> {user.gender}</p>
          <p><strong>Universitet:</strong> {user.university}</p>
          <p><strong>Lavozimi:</strong> {user.company?.title} ({user.company?.department})</p>
          <p><strong>Manzil:</strong> {user.address?.address}, {user.address?.city}, {user.address?.state} ({user.address?.postalCode})</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;