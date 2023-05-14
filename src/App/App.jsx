import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import Notiflix from 'notiflix';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const buttonRef = useRef(null);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const {name, number} = newContact
    if (contacts.find((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
      return;
    } else if (contacts.find((contact) => contact.number.toString() === number)) {
      Notiflix.Notify.failure(`${number} is already in contacts.`);
      return;
    }

    setContacts((prevContacts) => [newContact, ...prevContacts]);
    Notiflix.Notify.success(`${name} added.`);
  };

  const deleteContact = (contactId, contactName) => {
    buttonRef.current.blur();
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
    Notiflix.Notify.warning(`${contactName} deleted.`);
  };

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toString().includes(filter)
  );

  const handleEditcontact = (updatedContact) => {
    setContacts(prev => prev.map(contact => {
      if(contact.id === updatedContact.id){
        return updatedContact
      }
      return contact
    }))
  }

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onFilterChange={handleFilterChange} dis={contacts.length === 0} />
        {contacts.length > 0 && (
          <ContactList 
          options={filteredContacts}
           onDeleteContact={deleteContact} 
           onEditContact ={handleEditcontact}
           />
        )}
      </Section>
    </Container>
  );
};

export default App;
