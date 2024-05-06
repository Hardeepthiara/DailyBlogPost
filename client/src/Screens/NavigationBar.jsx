import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img
          src="/logo/Dailyblogpost.png" // Relative path to your logo image
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="DailyBlogPost Logo"
        /></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          
        </Nav>

        <Button variant="outline-primary" as={Link} to="/login">Login / Register</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
