// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearnspireLandingPage from './component/LearnspireLandingPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LearnspireLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;