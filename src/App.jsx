import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import ModuleView from './pages/ModuleView';
import AuthGate from './components/Auth/AuthGate';
import { useAuth } from './context/AuthContext';
import AdminPanel from './pages/AdminPanel';

function ProtectedRoutes() {
  const { currentUser } = useAuth();

  if (!currentUser) return <AuthGate />;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="module/:moduleId" element={<ModuleView />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ProtectedRoutes />
    </BrowserRouter>
  );
}

export default App;
