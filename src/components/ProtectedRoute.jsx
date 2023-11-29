import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export default function ProtectedRoute({ element: Component, redirect }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirect} /> : Component;
}
