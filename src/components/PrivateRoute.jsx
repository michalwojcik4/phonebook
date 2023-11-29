import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export default function PrivateRoute({ element: Component, redirect }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? Component : <Navigate to={redirect} />;
}
