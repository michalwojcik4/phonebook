import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/slices/auth/operations';

import css from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <div className={css.container}>
      <NavLink to="/register">Register</NavLink>
      <div className={css.container__box}>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.form__side}>
            <h1 className={css.form__title}>Login</h1>
          </div>
          <div className={css.form__side}>
            <div className={css.form__group}>
              <input
                className={css.form__input}
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className={css.form__group}>
              <input
                className={css.form__input}
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className={css.form__group}>
              <button type="submit" className={css.form__button}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
