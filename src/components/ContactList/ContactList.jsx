import { PropTypes } from 'prop-types';
import { List,  ContactContainer } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';


export const ContactList = ({ options, onDeleteContact }) => {

  
  return (
    options.length !== 0 && (
      <ContactContainer>
        <List>
          {options.map((cont) => {
           

            return (
            <ContactListItem 
            key={cont.id}
            contact = {cont}
           deleteContact = {onDeleteContact}
            ></ContactListItem>
            );
          })}
        </List>
      </ContactContainer>
    )
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
