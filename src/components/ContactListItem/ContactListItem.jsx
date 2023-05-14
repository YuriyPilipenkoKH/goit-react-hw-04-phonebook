import React from 'react'
import { useState } from 'react';
import { ListItem,ItemCard, BtnDelete, BtnEdit , EditWrapper,BtnWrapper} from 'components/ContactList/ContactList.styled';

export default function ContactListItem( {contact, deleteContact, onEditContact}) {
const {id,name,number} = contact    
const [isEdit, setIsEdit] = useState(false)
const [nick, setNick] = useState(name)
const [phone, setPhone] = useState(number)

// const buttonRef = useRef(null);

const editContact  =() => {

    setIsEdit(prev => !prev)
    if(isEdit){
        const updatedContact = {
            id,
            name: nick,
            number: phone,
        }
        onEditContact(updatedContact)
    }

  }


const handleChnge =(e) =>{

    const{name, value} =e.currentTarget
    switch (name) {
        case 'nick':
            setNick(value)
            break;
        case 'phone':
            setPhone(value)
            break;
    
        default:
            break;
    }
     
}

 




  return (
    <>
          <ListItem  totalItems={4}>
                {isEdit ? (
                  <EditWrapper className="edit-wrapper">
                    <input
                     type='text'
                      name='name'
                      value ={nick}
                       onChange={handleChnge}
                       />
                    <input
                     type='number'  
                     name='number'
                     value={phone}
                      onChange={handleChnge} 
                      />
                  </EditWrapper>
                ) : (
                  <ItemCard className="cardSpan">
                    {contact.name}: {contact.number}
                  </ItemCard>
                )}

                <BtnWrapper className="button-wrapper">
                  <BtnEdit
                    type="button"
                    onClick={ editContact}
                  
                  >
                    {isEdit ? 'Save': 'Edit'}
                  </BtnEdit>

                  <BtnDelete
                    type="button"
                    onClick={() => deleteContact(id)}
                  
                  >
                    Delete
                  </BtnDelete>
                </BtnWrapper>
              </ListItem>
      
    </>
  )
}
