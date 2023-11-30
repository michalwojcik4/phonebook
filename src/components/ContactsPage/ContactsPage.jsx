import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  selectFilteredContacts,
  selectIsLoading,
  selectContacts,
} from '../../redux/slices/contacts/selectors';
import {
  deleteContact,
  fetchContacts,
  addContact,
} from '../../redux/slices/contacts/operations';
import { selectUser } from 'redux/slices/auth/selectors';
import { logout } from '../../redux/slices/auth/operations';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { Loader } from '../Loader/Loader';
import Filter from '../Filter/Filter';

import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const { isLoading } = useSelector(selectIsLoading);
  const allContacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    const checkContact = allContacts.filter(contact =>
      contact.number.toLowerCase().includes(newContact.number.toLowerCase())
    );

    if (checkContact.length > 0) {
      Notify.failure('There is a contact for this number in the phone book');
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={css.contacts}>
      <div className={css.contacts__nav}>
        <p className={css.contacts__email}>{user.email}</p>
        <button onClick={handleClick} className={css.contacts__logoutbtn}>
          Logout
        </button>
      </div>
      <div className={css.contacts__line}></div>
      <div className={css.contacts__box}>
        <ContactForm onAddContact={handleAddContact} />
        <div className={css.contacts__filter}>
          <Filter />
          {isLoading && <Loader />}
          {!isLoading && (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={handleDeleteContact}
            />
          )}
        </div>
      </div>
    </div>
  );
};
