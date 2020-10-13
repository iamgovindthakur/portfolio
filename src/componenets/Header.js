import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="justify">
          <Nav.Item>
            <Nav.Link href="#link">View My Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://twitter.com/iamgovindthakur">
              {" "}
              <i className="fa fa-twitter"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/iamgovindthakur">
              {" "}
              <i className="fa fa-github"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/iamgovindthakur">
              {" "}
              <i className="fa fa-linkedin"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.facebook.com/iamgovindthakur">
              {" "}
              <i className="fa fa-facebook"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
