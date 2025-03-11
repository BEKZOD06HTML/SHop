import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Korzina from './components/korzina/korzina';
import Like from './components/like/like';
import Todo from './components/todo/todo';
import Login from './components/login/login';
import Profil from './components/profil/profil';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/like" element={<Like />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />

        {/* Notog'ri URL bo'lsa Home sahifasiga yo'naltir */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
