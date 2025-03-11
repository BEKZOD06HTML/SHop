import React, { useState } from 'react';
import './login.css';
import API from '../../utils/API';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPas] = useState('');
  const navigate = useNavigate();

  // Agar user allaqachon login qilgan bo'lsa, profilga yo'naltiradi
  if (localStorage.getItem('accessToken')) {
    return <Navigate to="/profile" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/login', {
        username: username,
        password: pass,
      });

      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        window.dispatchEvent(new Event('storage')); // Headerni yangilash
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login yoki parol xato!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={pass}
          onChange={(e) => setPas(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
