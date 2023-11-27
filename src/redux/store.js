import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlices';
import { filterReducer } from './slices/filterSlices';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
