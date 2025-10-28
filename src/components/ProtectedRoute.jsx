import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }){
  const auth = useAuth(); const loc = useLocation()
  if(!auth.isAuthenticated()) return <Navigate to="/auth/login" state={{ from: loc }} replace />
  return children
}
