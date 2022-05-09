import React from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";

export function UpdatedUser(props){
  const user = props.userdata
  const { handleSubmit, handleUpdate} = props;
  
  return (
    <>
       <Col lg={12}>
      <Row>
          <Card className="bg-light text-black" border='danger' style={{borderRadius: 20}}>
      <Card.Title style={{ textAlign: "center"}}>Update Profile</Card.Title>
          
      <Form className="profile-form" onSubmit={(e) =>handleSubmit(e)} >
    
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control
           type='text'
           name='Username'
           defaultValue={user.Username}
           onChange={e => handleUpdate(e)} 
           required
          placeholder="Enter a username"
           />
        </Form.Group>
       
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
           type='text'
           name='Password'
           placeholder="New Password (required when updating profile info)"
           onChange={e => handleUpdate(e)} 
            />
          
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
           type='text'
           name='Email'
           defaultValue={user.Email}
           onChange={e => handleUpdate(e)}         
           required
          placeholder="Enter an email" 
          />
          
        </Form.Group>
      
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update
        </Button>
        <h6>*Updates will be displayed after next Login</h6>
    </Form>
    </Card>
    </Row>
    </Col> 
    </>
  )
}

export default UpdatedUser ; 