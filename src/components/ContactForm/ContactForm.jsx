import { PropTypes } from 'prop-types';
import React, { useState,useRef } from 'react';
import { nanoid } from 'nanoid';
import { Input, Form, Label, ContactFormBtn } from './ContactForm.styled';
import { iconReactHook } from 'utils/svgIcons';


const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    buttonRef.current.blur();
    e.preventDefault();
    onSubmit({ id: nanoid(), name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>
      <ContactFormBtn 
      type="submit"
      ref={buttonRef}
      >Add contact{ iconReactHook }</ContactFormBtn>
    </Form>
  );
};

export default ContactForm;

  ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
}