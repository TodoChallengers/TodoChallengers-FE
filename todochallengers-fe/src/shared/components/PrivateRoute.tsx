import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store' 

const PrivateRoute: React.FC = ({ children }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />
}

export default PrivateRoute
