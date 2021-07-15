
import './App.css';
import Add from './Components/Add';
import ContactList from './Components/ContactList';
import {Link, Route,Switch}from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { togglefalse } from './JS/actions/edit';
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
<h2>workshop mern-app</h2>
<Button inverted color='blue' onClick={()=>dispatch(togglefalse())}><Link to="/add">Add contact</Link></Button>
<Button inverted color='blue'><Link to="/"> contact list</Link></Button>

<Switch>
  <Route exact path="/" component={ ContactList}/>
  <Route path={["/Add","/edit/:id"]} component={Add}/>
</Switch>
    </div>
  );
}

export default App;
