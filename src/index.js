import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About';
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './contexts/AuthContext';
import UserPage from './pages/UserPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:id" element={<UserPage />}/>
        </Routes> 
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
