import React, { useState } from 'react';
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import Notiflix from 'notiflix';
import { useLocalStorage } from 'hooks/useLocalStorage';

const DEFAULT_CONTACTS = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', DEFAULT_CONTACTS);
  const [filter, setFilter] = useState('');
 



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
   

    setTimeout(() => {
      const shouldDelete = window.confirm(`Are you sure you want to delete ${contactName}?`);
      if (shouldDelete) {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
        Notiflix.Notify.warning(`${contactName} deleted.`);
      }
    }, 700);
          



    // buttonRef.current.blur(); // Manually blur the button
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
    console.log(updatedContact);
    const {id, name, number} = updatedContact

    // const previousContact = contacts.filter(contact => contact.id === id)
    // console.log('previousContact' ,previousContact);

    const allExeptUpdated = contacts.filter(contact => contact.id !== id)
    // console.log('allExeptUpdated', allExeptUpdated);


    if (allExeptUpdated.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${name} is already in contacts.`);
      return ;
    } else if (allExeptUpdated.find((contact) => contact.number.toString() === number)) {
      Notiflix.Notify.failure(`${number} is already in contacts.`);
      return;
    }

    setContacts(
      [updatedContact, ...allExeptUpdated]
     
    )
    Notiflix.Notify.success(`${name} updated.`);

  // setContacts(prev => prev.map(contact => {
  //   if((contact.id === updatedContact.id) ){
    
  //    
  //     return updatedContact
  //   }
 
  //   return contact
  // }))

  }

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm 
        onSubmit={addContact} 
      
        />
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
