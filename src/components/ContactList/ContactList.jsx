import { PropTypes } from 'prop-types';
import { List, ListItem,ItemCard, ContactContainer } from './ContactList.styled';
import { BtnDelete, BtnEdit , EditWrapper,BtnWrapper} from './ContactList.styled';
import { useState } from 'react';


export const ContactList = ({ options, onDeleteContact }) => {
  const [isEdit, setIsEdit] = useState(true)

  const editContact  =() => {
     setIsEdit(prev => !prev)
  }

  return (
   options.length !== 0  &&  
    <ContactContainer>
    <List>
      {options.map(contact => {
        return (
          <>
           

          <ListItem 
          key={contact.id}
          totalItems={4}
          >

              {isEdit 
              ? 
               <EditWrapper className='edit-wrapper'>
               <input/>
               <input/>
              </EditWrapper>
              :  
                <ItemCard
              className='cardSpan'
              > {contact.name}: {contact.number}</ItemCard>
              
              }

            
           
            <BtnWrapper className='button-wrapper'>
              <BtnEdit 
              type="button"
              onClick={() => onDeleteContact(contact.id, contact.name)}>
                Edit
              </BtnEdit>
              <BtnDelete
              type="button"
              onClick={() => onDeleteContact(contact.id, contact.name)}>
                Delete
              </BtnDelete>
            </BtnWrapper>

          </ListItem>
          </>
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
