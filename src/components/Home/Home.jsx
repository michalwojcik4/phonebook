import { NavLink, Navigate } from 'react-router-dom';

import { useAuth } from '../../hook/useAuth';

const UnauthenticatedNav = () => (
  <>
    <h1>Phonebook</h1>
    <nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  </>
);

export const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {' '}
      {isLoggedIn ? (
        <Navigate to="/contacts" replace />
      ) : (
        <UnauthenticatedNav />
      )}
    </>
  );
};
