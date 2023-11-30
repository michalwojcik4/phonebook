import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/slices/auth/operations';

import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [name, setNick] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setNick(value);
    if (name === 'email') setMail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <div className={css.register}>
      <nav className={css.register__nav}>
        <NavLink to="/login" className={css.register__link}>
          Login
        </NavLink>
      </nav>
      <div className={css.register__line}></div>
      <div className={css.register__box}>
        <form className={css.form} onSubmit={handleSubmit}>
          <h1 className={css.form__title}>Register</h1>
          <input
            className={css.form__input}
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={handleChange}
          />
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
