
import { Navigate } from 'react-router-dom';

import React from 'react';

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
 
  const isAuthenticated = !!localStorage.getItem("admin_token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AdminRoute;
