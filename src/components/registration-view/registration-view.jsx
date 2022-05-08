import React, {useState} from "react";
import axios from "axios";
import PropTypes from 'prop-types';

import {Form, Button, Card, Container, Col, Row} from 'react-bootstrap';

import './registration-view.scss';
import { Link } from "react-router-dom";

export function RegistrationView(props) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  //Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');


  const validate = () => {
    let isReq = true; 
    if(!username){
      setUsernameErr('Create Username');
      isReq = false; 
    } else if(username.length < 5){
      setUsernameErr('Username must be 5 characters long');
      isReq = false;
    }
    if(!password){
      setPasswordErr('Create Password(Min 6 characters)');
      isReq=false;
    }else if (password.length < 6){
      setPasswordErr('Password must be 6 characters long');
      isReq=false;
    }
    if(!email){
      setEmailErr('Add Email');
      isReq = false;
    } else if(email.indexOf('@') === -1){
      setEmail('Invalid Email');
      isReq = false; 
    }
   
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq){
    axios.post('https://mysterious-wildwood-desperado.herokuapp.com/users',{
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday
  })
    .then(response => {
      const data = response.data; 
      console.log(data);
      alert('Success! Please Login.')
      window.open('/', '_self');
      //The second argument '_self' is necessary so that the page will 
      //open in the current tab
    })
    .catch(response => {
      console.error(response);
      alert('something wasn\'t entered right');
    });
  }
};
  return(
    <Container>
      <Row>
        <Col med={4}> 
         
           <Card className="bg-light text-black" border='danger' style={{marginTop: 100, marginBottom: 50, borderRadius: 20}}>
            <Card.Body>
             <Card.Title style={{textAlign: 'center'}}>Please Register</Card.Title>
             <Form className="registration-border">
               <Form.Group controlId="formUsername" className="reg-form-inputs">
                 <Form.Label>Username:</Form.Label>
                 <Form.Control 
                   type="text"
                   value={username}
                   onChange={e =>setUsername(e.target.value)}
                   required
                   placeholder="Enter a username"
                   />
                   {usernameErr && <p>{usernameErr}</p>}
               </Form.Group>

               <Form.Group controlId="formPassword">
                 <Form.Label>Password:</Form.Label>
                 <Form.Control 
                   type="text"
                   value={password}
                   onChange={e =>setPassword(e.target.value)}
                   required
                   minLength="8"
                   placeholder="Enter your password" />
                   {passwordErr && <p>{passwordErr}</p>}
               </Form.Group>

               <Form.Group>
                 <Form.Label>Email</Form.Label>
                 <Form.Control
                   type="email"
                   value={email}
                   onChange={e =>setEmail(e.target.value)}
                   required
                   placeholder="Enter an email" 
                   />
                   {emailErr && <p>{emailErr}</p>}
               </Form.Group>

               <Form.Group>
                 <Form.Label>Birthday</Form.Label>
                 <Form.Control
                  type="date"
                  value={birthday}
                  onChange={e => setBirthday(e.target.value)} 
                  placeholder="Enter Birthday" />
               </Form.Group>

               <Button variant="primary" style={{marginTop: 50, marginBottom: 25}}type="submit"
                 onClick={handleSubmit}>
                 Submit
               </Button>
               <p></p>
               <p>Already registered <Link to={'/'}>Sign In</Link> here</p>

             </Form>
            </Card.Body>
           </Card>
           
          
        </Col>
      </Row>
    </Container>

  );
  }

  RegistrationView.propTypes={
    register: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
    })
    
  };
  
//this register prop !!
