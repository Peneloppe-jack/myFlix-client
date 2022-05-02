import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Navbar, Nav, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
//import { Button } from '../button-view/button-view';

import './login-view.scss'

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
// Declare hook for each input
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');

// validate user inputs with Authorsisation and authentification set on SERVERside
const validate = () => {
    let isReq = true;
    if(!username){
     setUsernameErr('Username Required');
     isReq = false;
    }else if(username.length < 5){
     setUsernameErr('Username must be 5 characters long');
     isReq = false;
    }
    if(!password){
     setPasswordErr('Password Required');
     isReq = false;
    }else if(password.length < 6){
     setPassword('Password must be 6 characters long');
     isReq = false;
    }

    return isReq;
}

const handleSubmit = (e) => {
  e.preventDefault();
  const isReq = validate();
  if(isReq) {
    /* Send request to the server for authentication */
    axios.post('https://mysterious-wildwood-desperado.herokuapp.com/login', {
        Username: username,
        Password: password
    })
    .then(response =>{
        const data = response.data;
        props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  }
};

  return (
    <Form>
      
      <FormGroup controlId="formUsername">
        <FormLabel>Username:</FormLabel>
        <FormControl type="text" onChange={e => setUsername(e.target.value)} />
      </FormGroup>

      <FormGroup controlId="formPassword">
        <FormLabel>Password:</FormLabel>
        <FormControl type="password" onChange={e => setPassword(e.target.value)} />
      </FormGroup>

      <Button label ="super-button" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

  LoginView.propTypes = {   
    onLoggedIn: PropTypes.func.isRequired,
};

