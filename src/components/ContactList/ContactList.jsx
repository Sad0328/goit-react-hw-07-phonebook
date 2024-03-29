import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContacts } from '../../redux/operations';


const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
           
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}>
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

// import React from 'react';
// import { List, Item, Button } from './ContactList.styled';

// import { useSelector, useDispatch } from 'react-redux';
// import { getVisibleContacts } from '../../redux/selectors';
// import { removeContact } from '../../redux/contactsSlice';

// const ContactList = () => {
//   const contacts = useSelector(getVisibleContacts);
//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(removeContact());
//   return (
//     <List>
//       {contacts.map(contact => (
//         <Item key={contact.id}>
//           {contact.name + ' : ' + contact.number}
//           {
//             <Button type="button" name="delete" onClick={handleDelete}>
//               {' '}
//               delete
//             </Button>
//           }
//         </Item>
//       ))}
//     </List>
//   );
// };

// export default ContactList;
