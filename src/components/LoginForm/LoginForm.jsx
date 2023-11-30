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
    <div className={css.login}>
      <nav className={css.login__nav}>
        <NavLink to="/register" className={css.login__link}>
          Register
        </NavLink>
      </nav>
      <div className={css.login__line}></div>
      <div className={css.login__box}>
        <form className={css.form} onSubmit={handleSubmit}>
          <h1 className={css.form__title}>Login</h1>
          <input
            className={css.form__input}
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={handleChange}
          />
          <input
            className={css.form__input}
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
          <button type="submit" className={css.form__button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
