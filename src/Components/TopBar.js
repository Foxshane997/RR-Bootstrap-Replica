import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function TopBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ padding: "0 20px" }}>
        <Navbar.Brand href="#home" style={{ padding: "5px 0", height: "40px" }}>
          <img
            src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg"
            alt="Instacart Logo"
            style={{ height: "100%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "bold",
            }}
          >
            <Nav.Link
              style={{
                color: "#343538",
                marginRight: "20px",
                padding: "10px 15px",
              }}
              href="#LogIn"
            >
              Log In
            </Nav.Link>
            <Button
              variant="success"
              style={{ fontSize: "18px", padding: "8px 20px" }}
            >
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;
