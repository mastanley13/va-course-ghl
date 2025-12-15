import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import ModuleView from './pages/ModuleView';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './context/AuthContext';

const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/"
          element={(
            <RequireAuth>
              <Layout />
            </RequireAuth>
          )}
        >
          <Route index element={<Dashboard />} />
          <Route path="module/:moduleId" element={<ModuleView />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
