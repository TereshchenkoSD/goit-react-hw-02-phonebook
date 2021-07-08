import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/Form';

import ContactList from './components/ContactList';

import Filter from './components/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in the contact list`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter),
    // );
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
