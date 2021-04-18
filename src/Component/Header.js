import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Asset/Img/logo.png';
import './Header.scss';

const Header = () => (
  <>
    <div id="navbar">
      <Container>
        <Navbar expand="lg">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="" />
            {/* <Link to="/">Barnd</Link> */}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact className="nav-link" to="/" activeClassName="selected">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about" activeClassName="selected">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact" activeClassName="selected">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/login" activeClassName="selected">
                Log In
              </NavLink>
              <NavLink className="nav-link" to="/register" activeClassName="selected">
                Registertion
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  </>
);

export default Header;
