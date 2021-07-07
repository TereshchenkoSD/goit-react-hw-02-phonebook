import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form';

import ContactList from './components/ContactList';

export default class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  addContacts = contactFormState => {
    const { name } = contactFormState;
    const contact = {
      id: uuidv4(),
      name,
    };
  };

  render() {
    return (
      <div>
        <Form addContacts={this.addContacts} />
        <ContactList />
      </div>
    );
  }
}
