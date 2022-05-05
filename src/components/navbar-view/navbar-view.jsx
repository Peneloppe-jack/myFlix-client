import React from "react";
import { Container, Nav, Navbar,Button } from "react-bootstrap";

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
    <Navbar className="main-nav" sticky="top" bg="navColor" expand="lg">

      <Container fluid>

          <Navbar.Brand className="#home" href="/"> Welcome to myFlix !</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="me-auto">
                <Nav.Link href="#home">Movies</Nav.Link>
                <Nav.Link href="#user">Profile</Nav.Link>
                <Nav.Link href="#login">Sign in</Nav.Link>
                <Nav.Link href="#register">Sign up</Nav.Link>
                </Nav>
             
        </Container>
    </Navbar>
  );
}




