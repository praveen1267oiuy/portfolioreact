
import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin-right: 20px;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    display: ${props => (props.open ? 'block' : 'none')};
  }
`;

const NavbarItem = styled.li`
  margin: 0 15px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <NavbarContainer>
      <Logo>Praveen's Portfolio</Logo>
      <NavbarList open={menuOpen}>
        <NavbarItem>
          <a href="#about" onClick={() => scrollToSection('about')}>
            About
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#services" onClick={() => scrollToSection('services')}>
            Services
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </NavbarItem>
      </NavbarList>
      <Burger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
    </NavbarContainer>
  );
};

export default Navbar;
