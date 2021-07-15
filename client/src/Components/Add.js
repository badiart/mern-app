import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import { editContact, getcontacts, postContact } from '../JS/actions/contacts'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Add = () => {
  const dispatch = useDispatch()

  const [user, setuser] = useState({name:"",age:"",phonenumber:""})
  const userReducer = useSelector(state => state.contactReducer.user)
  const edit = useSelector(state => state.editReducer.edit)

  console.log(userReducer);
  useEffect(() => {
    edit?setuser(userReducer):setuser({name:"",age:"",phonenumber:""})
  }, [edit,userReducer])

  const handleChange=(e)=>{
    e.preventDefault();
    setuser({...user,[e.target.name]:e.target.value })
  }

  
  const handleContact=()=>{
    if(!edit){ dispatch(postContact(user));}
    else{dispatch(editContact(userReducer._id,user))}
  }
  return (
        <div>
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input value={user.name} placeholder='First Name' name="name" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>age</label>
      <input  value={user.age} placeholder='Please enter your age' name="age" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>phonenumber</label>
      <input  value={user.phonenumber} placeholder='Please enter your phonenumber' name= "phonenumber"  onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Link to='/'>
    <Button type='submit'onClick={handleContact}>{edit ?"Edit" : "Save"}</Button>
    </Link>
    
  </Form>



        </div>
    )
}

export default Add
