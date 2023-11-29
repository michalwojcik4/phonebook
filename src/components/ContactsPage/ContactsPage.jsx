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

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { Loader } from '../Loader/Loader';
import Filter from '../Filter/Filter';
import User from '../User/User';

import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const { isLoading } = useSelector(selectIsLoading);
  const allContacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

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

  return (
    <div className={css.container}>
      <div>
        <User />
      </div>
      <div className={css.container__box}>
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <div className={css.container__box}>
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
  );
};
