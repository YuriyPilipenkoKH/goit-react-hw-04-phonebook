import React from 'react'
import { useState , useRef, useContext} from 'react';
// import Notiflix from 'notiflix';
import { ListItem,ItemCard, BtnDelete, BtnEdit , EditWrapper,BtnWrapper} from 'components/ContactList/ContactList.styled';
import { Context } from 'hooks/useContext';


export default function ContactListItem( {contact, deleteContact, onEditContact }) {
const {id,name,number} = contact    
const [isEdit, setIsEdit] = useState(false)
const [nick, setNick] = useState(name)
const [phone, setPhone] = useState(number)
const buttonRef = useRef(null);
const { obj } = useContext(Context)
// console.log(obj);

// const buttonRef = useRef(null);
const itemStateUpdater = ({obj}) => {
    // console.log('itemStateUpdater');
    setNick(obj.name)
   
}


const editContact  =() => {

    setIsEdit(prev => !prev)
    if(isEdit){
        const updatedContact = {
            id,
            name: nick,
            number: phone,
        }
         window.confirm(`Are you sure you want to updated ${name}?`);
        onEditContact(updatedContact)
    }
    buttonRef.current.blur(); // Manually blur the button
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
   
          <ListItem  totalItems={4}>
                {isEdit ? (
                  <EditWrapper className="edit-wrapper">
                    <input
                     type='text'
                     name="nick"
                     value ={nick}
                     onChange={handleChnge}
                       />
                    <input
                      type='text'
                      name="phone"
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
                    ref={buttonRef}
                  >
                    {isEdit ? 'Save': 'Edit'}
                  </BtnEdit>

                  <BtnDelete
                    type="button"
                    onClick={() => deleteContact(id, name)}
                   
                  >
                    Delete
                  </BtnDelete>
                </BtnWrapper>
              </ListItem>
   
  )
}
