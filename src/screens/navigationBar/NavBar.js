import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}
function NavBar() {
  return (
    <div>
      <div id="home">
        <Navbar expand='md'>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <Navbar.Collapse>
              {createLinks()}

            </Navbar.Collapse>
          </Nav>

        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
