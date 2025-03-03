import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Korzina from './components/korzina/korzina';
import Like from './components/like/like';
import Todo from './components/todo/todo';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/like" element={<Like />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default App;

