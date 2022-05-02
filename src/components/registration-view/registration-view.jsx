import React,{ useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Navbar, Nav, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
//import { Button } from '../button-view/button-view';

import './registration-view.scss';

export function RegistrationView(props) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Birthday, setBirthday] = useState('');

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
      setPasswordErr('Create Password(Min 5 characters)');
      isReq=false;
    }else if (password.length < 5){
      setPasswordErr('Password must be 6 characters long');
      isReq=false;
    }
    if(!email){
      setEmailErr('Email does not appear to be valid');
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
  if(isReq) {

    /* Send request to the server for authentication */
    axios.post('https://mysterious-wildwood-desperado.herokuapp.com/users', {

        Username: username,
        Password: password,
        Email: email,
        Birthday: Birthday
      })

      .then(response => {
        const data = response.data; 
        props.onRegistered(data);
        console.log(data);
        alert('Registration successful, Please Login.')
        window.open('/', '_self');
        //The second argument '_self' is necessary so that the page will 
        //open in the current tab

      })
    .catch(e => {
      console.log('no such user')
    });
  }
};

return (

    <Container fluid className="registerContainer" >
    
        <Navbar bg="navColor" variant="dark" expand="lg">
          <Container fluid>
          <Navbar.Brand href="#home">myFlix</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#logout">Sign up</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    
      <Row>
      <Col>
          <CardGroup>
            <Card className="registerCard">
              <Card.Body>
                <Card.Title className="text-center">Welcome to myFlix.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">Register Here!</Card.Subtitle>
            
                <Form>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    {usernameErr && <p>{usernameErr}</p>}
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    {emailErr && <p>{emailErr}</p>}
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control className="mb-3" type="date" value={Birthday} onChange={e => setBirthday(e.target.value)} />
                  </Form.Group>
                  
                  <Button className="registerButton" variant="secondary" size="lg" type="submit" onClick={handleSubmit}>Register</Button>
                  
                  <p></p>
                  <p>Already registered? 
                    <link to={'/'}> Sign in </link> here</p> 

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
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
      Birthday: PropTypes.string.isRequired,
    })
 };
//this register prop !!