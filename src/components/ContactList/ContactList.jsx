import React from 'react';
import { Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}{' '}
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
      </li>
    ))}
  </ul>
);

export default ContactList;
