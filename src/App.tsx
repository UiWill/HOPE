import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtistPage from './pages/ArtistPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
    </Routes>
  );
}

export default App;