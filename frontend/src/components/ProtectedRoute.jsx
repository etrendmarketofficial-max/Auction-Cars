import { Navigate } from 'react-router-dom'
‎import { useAuth } from '../utils/AuthContext.jsx'
‎
‎export default function ProtectedRoute({ children }) {
‎  const { user, loading } = useAuth()
‎  if (loading) return <div className="max-w-7xl mx-auto px-4 py-10">Loading…</div>
‎  if (!user) return <Navigate to="/login" replace />
‎  return children
‎}