import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/contacts/filterSlices';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <input
        className={css.search__input}
        type="text"
        onChange={e => handleFilterChange(e)}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
