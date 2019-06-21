import React, { useState, Fragment } from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

import devices from "../utils/devices"

const NavbarContainer = styled.div`
  position: relative;
`

const StyledNavbar = styled.div`
  height: 10vh;
  background-color: #660066;
  display: flex;
  color: #fff;
`
const BrandContainer = styled.div`
  flex: 2;
  align-self: center;
  @media ${devices.laptop} {
    flex: 1;
  }
`
const Hamburger = styled.div`
  height: 2rem;
  width: 2rem;
  border: 0.2rem solid #fff;
  border-radius: 0.1rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  margin-right: 2rem;
  cursor: pointer;
  @media ${devices.mobileL} {
    display: flex;
  }
`

const HamburgerLines = styled.hr`
  width: 50%;
  color: #fff;
  margin: 0;
`

const Link = styled(GatsbyLink)`
  font-size: 2rem;
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  @media (hover: hover) {
    &:hover {
      color: #fff;
    }
  }
`

const Brand = styled.h1`
  font-size: 2.6rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  margin-left: 2rem;
  color: #fff;
  display: inline;
`

const NavLinksContainer = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${devices.mobileL} {
    display: none;
  }
`

const active = {
  color: "#fff",
  borderBottom: ".2rem solid #fff",
}

const collapsedNavContainerStyles = {
  display: "flex",
  backgroundColor: "#4d004d",
  flexDirection: "column",
  alignItems: "start",
  position: "absolute",
  width: "100%",
  borderTop: ".1rem solid #ddd",
  active: { color: "#fff" },
  link: {
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    paddingLeft: "1rem",
    fontSize: "1.8rem",
  },
}

const NavLinks = props => (
  <NavLinksContainer style={props.display}>
    <Link
      activeStyle={props.display ? props.display.active : active}
      to="/"
      style={props.display ? props.display.link : {}}
    >
      Home
    </Link>
    <Link
      activeStyle={props.display ? props.display.active : active}
      to="/about"
      style={props.display ? props.display.link : {}}
    >
      About
    </Link>
    <Link
      activeStyle={props.display ? props.display.active : active}
      to="/services"
      style={props.display ? props.display.link : {}}
    >
      Services
    </Link>
    <Link
      activeStyle={props.display ? props.display.active : active}
      to="/contact"
      style={props.display ? props.display.link : {}}
    >
      Contact
    </Link>
  </NavLinksContainer>
)

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false)

  return (
    <NavbarContainer>
      <StyledNavbar>
        <BrandContainer>
          <Link to="/">
            <Brand>Power User</Brand>
          </Link>
        </BrandContainer>
        <Hamburger onClick={() => setMenuExpanded(!menuExpanded)}>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
          <HamburgerLines></HamburgerLines>
        </Hamburger>
        {!menuExpanded && <NavLinks />}
      </StyledNavbar>
      {menuExpanded && <NavLinks display={collapsedNavContainerStyles} />}
    </NavbarContainer>
  )
}

export default Navbar
