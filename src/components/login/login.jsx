import React, { useState } from 'react';
import './login.css';
import API from '../../utils/API';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPas] = useState('');
  const navigate = useNavigate();
if(localStorage.getItem("accessToken")){
 return <Navigate to="/profile"/>
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
        navigate('/profil');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login yoki parol xato!');
    }
  };

  return (
    <div>
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