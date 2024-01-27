import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/routes/ProtectedRoute';
import PublicRoute from './components/routes/PublicRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={HomePage} />} />
          <Route path="/login" element={<PublicRoute Component={LoginPage} />} />
          <Route path="/registration" element={<PublicRoute Component={RegistrationPage} />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
