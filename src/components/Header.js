import React, { useState } from 'react'
import { Container, Navbar, Nav, NavbarBrand, NavDropdown } from 'react-bootstrap'
import BtnStyle from './BtnStyle'
import {Link, NavLink} from "react-router-dom"
function Header() {
  const [selectProject, setSelectProject]=useState("")
  const mainValue = true;
  function handleProject(eventKey){
  setSelectProject(eventKey)
  }
  return (
    <Navbar expand="md" className='py-3 sticky-top bg-light' >
    <Container fluid>
       <NavbarBrand as={NavLink} to={"/"}>
    <BtnStyle title={"Amaan/"} jobTitle={"GRAPHIC DESIGNER"} /> 

       </NavbarBrand>
      

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-2" >
          <Nav.Link as={NavLink} to={"/"} >ABOUT ME</Nav.Link>
          <Nav.Link as={NavLink} to={"/resume"}>RESUME</Nav.Link>

          <NavDropdown title={selectProject? selectProject:"PROJECT"} onSelect={handleProject} id="basic-nav-dropdown" className={mainValue ? 'dropdownActive' : ''}>
              <NavDropdown.Item as={NavLink} eventKey={"LOGO"} to={"/logo"}>LOGO</NavDropdown.Item>              
              <NavDropdown.Item as={NavLink} eventKey={"SOCIAL MIDA"} to={'/social_mida'}>SOCIAL MIDA</NavDropdown.Item>              
              <NavDropdown.Item as={NavLink} eventKey={"VIDEOS"} to={'/videos'}>VIDEOS</NavDropdown.Item>              
              {/* <NavDropdown.Item as={NavLink} eventKey={"BANNER"} to={'/banner'}>BANNER</NavDropdown.Item>               */}

            </NavDropdown>
          <Nav.Link as={NavLink} to={'/conatct'}>CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header
