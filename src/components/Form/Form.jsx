import { Component } from 'react';

export default class Form extends Component {
  static defaultProps = {
    initialContacts: [],
    initialName: '',
  };

  state = {
    contacts: this.initialContacts,
    name: this.initialName,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {};

  // addToContactList = e => {
  //   this.setState({ contacts: contacts.push() });
  // };

  render() {
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
