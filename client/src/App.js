import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [gender, setGender] = useState(null)
  const [species, setSpecies] = useState(null)
  const [affiliation, setAffiliation] = useState(null)

  const addPersonnel = () => {
    console.log(firstName)
    console.log(lastName)
    console.log(gender)
    console.log(species)
    console.log(affiliation)
  };

  return (
    <div>
      <Form.Label>First Name</Form.Label>
      <Form.Control
        onChange={(event) => {
          setFirstName(event.target.value)
        }}/>
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        onChange={(event) => {
          setLastName(event.target.value)
        }}/>
      <Form.Label>Gender</Form.Label>
      <Form.Control
        onChange={(event) => {
          setGender(event.target.value)
        }}/>
      <Form.Label>Species</Form.Label>
      <Form.Control
        onChange={(event) => {
          setSpecies(event.target.value)
        }}/>
      <Form.Label>Affiliation</Form.Label>
      <Form.Control
        onChange={(event) => {
          setAffiliation(event.target.value)
        }}/>
      <Button variant="primary" onClick={addPersonnel}>Add Personnel</Button>{' '}
    </div>
  );
}

export default App;
