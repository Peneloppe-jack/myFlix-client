import React from "react";
import { Col, Row, Card } from "react-bootstrap";

export function UserData(props) {
  const userdata = props.userdata
  return (
    <Col lg={12}>
      <Row>
        <Card className="ProfileInfo" style={{ textAlign: 'left'}} >
          <Card.Title >Info Profile</Card.Title>
          <Card.Body className="Profile Info" style={{ textAlign: 'left'}}>
          <p>Username: {userdata.Username}</p>
          <p>Email: {userdata.Email}</p>
        
          </Card.Body>
        </Card>
      </Row>
    </Col>
  )
}
export default UserData ;