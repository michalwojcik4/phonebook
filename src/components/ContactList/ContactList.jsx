import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from '../ContactItem/ContactItem';

import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={css.contacts}>
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  </div>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
