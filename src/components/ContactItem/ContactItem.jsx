import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={css.list__item}>
    <p className={css.list__text}>
      {contact.name}: {contact.number}{' '}
    </p>
    <button
      className={css.list__button}
      type="button"
      onClick={() => onDeleteContact(contact.id)}
    >
      Delete
    </button>
  </li>
);

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.object,
  onDeleteContact: PropTypes.func,
};
