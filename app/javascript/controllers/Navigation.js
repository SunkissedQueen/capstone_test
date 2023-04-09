import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/index">
          See all the categories
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/show">
          See the advice
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation