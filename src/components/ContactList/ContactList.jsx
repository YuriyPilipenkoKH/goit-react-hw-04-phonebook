import { PropTypes } from 'prop-types';
import { List, ListItem,ItemCard, ContactContainer } from './ContactList.styled';
import { BtnDelete } from './ContactList.styled';


export const ContactList = ({ options, onDeleteContact }) => {

  return (
   options.length !== 0  &&  
    <ContactContainer>
    <List>
      {options.map(contact => {
        return (
          <ListItem 
          key={contact.id}
          totalItems={4}
          >
              <ItemCard
              className='cardSpan'
              > {contact.name}: {contact.number}</ItemCard>
           
            <BtnDelete 
            type="button" 
            onClick={() => onDeleteContact(contact.id, contact.name)}>
              Delete
            </BtnDelete>
          </ListItem>
        );
      })}
    </List>
  </ContactContainer>
  
    
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
