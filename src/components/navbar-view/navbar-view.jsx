import React from "react";
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navbar-view.scss';

export function NavbarView({user}) {

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }

  const isAuth = () => {
    if(typeof window == "undefined") {
      return false;
    }
    if(localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };


  return (
    <Navbar className="main-nav" expand="md" variant="dark">
        <Container fluid>
          <Navbar.Brand className="navbar-logo"
          href="/">Welcome to myFlix !</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="md-auto">
                  {isAuth() && (
                       <Nav.Link href="/profile">{user}</Nav.Link>
                  )}
                  {isAuth() && (
                    <Button variant="link" onClick={() => { onLoggedOut() }}>Logout</Button>
                  )}
                  {!isAuth() && (
                      <Nav.Link href="/">login</Nav.Link>
                  )}
                  {!isAuth() && (
                      <Nav.Link href="/register">Sign-up</Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}