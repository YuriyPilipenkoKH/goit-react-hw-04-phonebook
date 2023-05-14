import React from 'react'
import { useState } from 'react';
import { ListItem,ItemCard, BtnDelete, BtnEdit , EditWrapper,BtnWrapper} from 'components/ContactList/ContactList.styled';

export default function ContactListItem( {contact, deleteContact}) {
  const [isEdit, setIsEdit] = useState(false)


  const editContact  =() => {
    console.log(deleteContact);
     setIsEdit(prev => !prev)
    // setSelectedContactId(contactId);
  }

  return (
    <>
          <ListItem  totalItems={4}>
                {isEdit ? (
                  <EditWrapper className="edit-wrapper">
                    <input />
                    <input />
                  </EditWrapper>
                ) : (
                  <ItemCard className="cardSpan">
                    {contact.name}: {contact.number}
                  </ItemCard>
                )}

                <BtnWrapper className="button-wrapper">
                  <BtnEdit
                    type="button"
                    onClick={() => editContact(contact.id)}
                  >
                    Edit
                  </BtnEdit>
                  <BtnDelete
                    type="button"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </BtnDelete>
                </BtnWrapper>
              </ListItem>
      
    </>
  )
}
