import React from 'react'
import { getcontacts } from '../JS/actions/contacts'
import { useDispatch,useSelector } from 'react-redux'
import {useEffect} from 'react'
import Contact from "./Contact"
const ContactList =() => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactReducer.contacts);
    const loadcontact = useSelector(state => state.contactReducer.loadcontact);
     console.log(contacts,loadcontact)
    useEffect(() => {
        dispatch ( getcontacts());
    }, []);
    return (
  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
{ loadcontact?<h2>loading</h2>
:contacts.map(el=><Contact  key={el._id} contact={el}/>)}
 </div>
    )
};

export default ContactList
