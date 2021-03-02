import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"
const [isOpen, setIsOpen] = useState(false)
const toggle = () => setIsOpen(!isOpen)
const Header = ({ siteTitle }) => (
  <Navbar color="light" light expand="md">
    <div className="container">
      <NavbarBrand href="/">{siteTitle}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/team">Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tags">Tags </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
