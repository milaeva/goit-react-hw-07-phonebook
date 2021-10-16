// import types from './types';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('delete/addContactRequest');
export const deleteContactSuccess = createAction('delete/addContactSuccess');
export const deleteContactError = createAction('delete/addContactError');

// export const deleteContact = createAction('contact/delete');

export const changeFilter = createAction('contact/changeFilter');
