import { NavLink, Navigate } from 'react-router-dom';

import { useAuth } from '../../hook/useAuth';

import css from './Home.module.css';

const UnauthenticatedNav = () => (
  <div className={css.home}>
    <h1 className={css.home__title}>Phonebook</h1>
    <nav className={css.home__nav}>
      <NavLink to="/register" className={css.home__link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.home__link}>
        Login
      </NavLink>
    </nav>
  </div>
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
