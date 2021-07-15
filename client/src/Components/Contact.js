import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { deletecontact, getcontacts } from '../JS/actions/contacts'
import { toggletrue } from '../JS/actions/edit'
import { getcontact } from '../JS/actions/contacts' 
const Contact = ({contact}) => {
    const dispatch=useDispatch()
    return (
        <div>
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://waterproofingraja.com/images/team/team1.png'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta>{contact.age}</Card.Meta>
        <Card.Description>
     <strong>{contact.phonenumber}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to={`/edit/${contact._id}`}>
          <Button inverted color='green' onClick={()=>{dispatch(getcontact(contact._id));
            dispatch(toggletrue())}}>
           Edit
          </Button>
          </Link>
          <Button inverted color='red' onClick={()=>dispatch(deletecontact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>

    </Card>
  </Card.Group>
</div>
    )
}

export default Contact
