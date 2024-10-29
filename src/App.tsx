import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login'; // Adjust the import path as necessary
import Dashboard from './Components/Dashboard/Dashboard'; // Adjust the import path as necessary

const App: React.FC = () => {
  // Function to check if user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Routes>
      {/* Default route to login */}
      <Route path="/" element={<Login />} />
      
      {/* Protected route to dashboard */}
      <Route 
        path="/dashboard" 
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
      />

      {/* Fallback for unmatched routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
