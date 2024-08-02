import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
import JoinPage from '@/pages/JoinPage';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinPage />} />
      </Routes>
    </Router>
  )
}

export default App
