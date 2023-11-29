import { ContactsPage } from 'components/ContactsPage/ContactsPage';
import { Home } from 'components/Home/Home';
import { LoginForm } from 'components/LoginForm/LoginForm';
import PrivateRoute from 'components/PrivateRoute';
import ProtectedRoute from 'components/ProtectedRoute';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { me } from 'redux/slices/auth/operations';
import { selectIsRefreshing } from 'redux/slices/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  if (isRefreshing) return <p>loading...</p>;

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              element={<RegistrationForm />}
              redirect="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute element={<LoginForm />} redirect="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute element={<ContactsPage />} redirect="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};
