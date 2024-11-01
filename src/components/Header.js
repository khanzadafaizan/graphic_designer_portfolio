import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import BtnStyle from "./BtnStyle";
import { NavLink } from "react-router-dom";

function Header() {
  const [selectProject, setSelectProject] = useState("");

  const handleProject = (eventKey) => {
    setSelectProject(eventKey);
    console.log(eventKey, "Logo");
  };

  return (
    <Navbar expand="md" className="py-3 sticky-top bg-light">
      <Container fluid>
        <NavbarBrand as={NavLink} to={"/"}>
          <BtnStyle title={"Amaan/"} jobTitle={"GRAPHIC DESIGNER"} />
        </NavbarBrand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-2">
            <Nav.Link as={NavLink} to={"/"}>
              ABOUT ME
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/resume"}>
              RESUME
            </Nav.Link>
            <NavDropdown
              title={selectProject ? selectProject : "PROJECT"}
              onSelect={handleProject}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={NavLink} eventKey={"LOGO"} to={"/logslist"}>
                LOGO
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                eventKey={"SOCIAL MIDA"}
                to={"/socialmedia"}
              >
                SOCIAL MIDA
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} eventKey={"VIDEOS"} to={"/videos"}>
                VIDEOS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to={"/contact"}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
