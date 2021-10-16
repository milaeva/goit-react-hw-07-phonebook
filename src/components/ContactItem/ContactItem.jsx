import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, phone, onDeleteContact }) => {
  return (
    <>
      <p className={s.item}>{name}</p>
      <p className={s.item}>{phone}</p>
      <button
        type="button"
        className={s.button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};
export default ContactItem;
ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
