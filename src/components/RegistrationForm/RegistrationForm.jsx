import React, { useState } from 'react';
import css from './RegistrationForm.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/slices/auth/operations';

export const RegistrationForm = () => {
  const [nick, setNick] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'nick') setNick(value);
    if (name === 'email') setMail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: nick,
        email,
        password,
      })
    );
  };

  return (
    <div className={css.container}>
      <NavLink to="/login">Login</NavLink>
      <div className={css.container__box}>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.form__side}>
            <h1 className={css.form__title}>Register</h1>
          </div>
          <div className={css.form__side}>
            <div className={css.form__group}>
              <input
                className={css.form__input}
                type="text"
                name="nick"
                placeholder="Nick"
                required
                value={nick}
                onChange={handleChange}
              />
            </div>
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
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
