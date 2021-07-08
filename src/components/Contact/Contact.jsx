import PropTypes from 'prop-types';

import { ContactListItem, ContactButton } from './Contact.styles';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactListItem key={id}>
      {name}: {number}
      <ContactButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ContactButton>
    </ContactListItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
