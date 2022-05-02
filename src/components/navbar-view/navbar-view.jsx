import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import './navbar-view.scss'

export function Navbar() {
  let user = localStorage.getItem("user");

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand as={Link} to={"/"}>
        Welcome to myFlix
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {isAuth() && (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to={`/`}>Hi, {user}</Nav.Link>
            <Nav.Link
              onClick={() => {
                onLoggedOut();
              }}
            >
              Logout
            </Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              
              <NavDropdown.Item as={Link} to={`/users/${user}`}> Profile</NavDropdown.Item>

              <NavDropdown.Item href="#ome">Movies</NavDropdown.Item>
              
              <NavDropdown.Item href="#Logout"> Logout </NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}