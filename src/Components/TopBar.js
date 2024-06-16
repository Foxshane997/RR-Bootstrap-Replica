import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function TopBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ padding: "0 20px" }}>
        <Navbar.Brand href="#home" style={{ padding: "5px 0" }}>
          <img
            src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg"
            alt="Instacart Logo"
            style={{ height: "40px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Nav className="mr-auto"></Nav>
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "bolder",
            }}
          >
            <Nav.Link
              style={{ color: "#343538", marginRight: "20px" }}
              href="#LogIn"
            >
              Log In
            </Nav.Link>
            <Button variant="success" style={{ fontSize: "18px" }}>
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;
