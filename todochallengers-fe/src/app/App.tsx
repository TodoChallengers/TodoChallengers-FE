import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
import LoginPage from '@/pages/LoginPage';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
