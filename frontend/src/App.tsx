import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { HomePage } from './pages/HomePage';
import { BanksPage } from './pages/BanksPage';
import { BankDetailPage } from './pages/BankDetailPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        } />
        <Route path="/banks" element={
          <PublicLayout>
            <BanksPage />
          </PublicLayout>
        } />
        <Route path="/banks/:id" element={
          <PublicLayout>
            <BankDetailPage />
          </PublicLayout>
        } />
        
        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* TODO: Add other routes */}
        {/* <Route path="/partners" element={<PartnersPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
