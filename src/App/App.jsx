import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  
    filter: '',
  };

  componentDidMount() {

    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  
  }

  componentDidUpdate( prevProps,prevState) {

    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${newContact.name} is alredy in contacts.`);
      return;
    } else if (
      this.state.contacts.find(
        contact => contact.number.toString() === newContact.number
      )
    ) {
      Notiflix.Notify.failure(`${newContact.number} is alredy in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    Notiflix.Notify.success(`${newContact.name}  added`);

  };

  deleteContact = (contactId, contactName) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
   
    Notiflix.Notify.warning(`${contactName} deleted`);
  };


  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

render() {
  const { contacts, filter } = this.state;
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toString().includes(filter)
  );

  return (
    <Container>
   <Section title = "Phonebook"> 
   <ContactForm onSubmit={this.addContact} />
   
   </Section>

   <Section title = "Contacts"> 
   <Filter 
   value={filter}
    onFilterChange={this.filterChange} 
    dis = {this.state.contacts.length === 0 }
    />
   {this.state.contacts.length > 0  &&
        <ContactList
        options={filteredContacts}
        onDeleteContact={this.deleteContact}
      />
   }
   </Section>
    </Container>

       )}   
};

