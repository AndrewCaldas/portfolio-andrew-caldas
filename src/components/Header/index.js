import React from 'react';
import { Row, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Drawings from '../Drawings';
import Text from '../Text';
import './index.css';

let NavLinks = [
  { id: 1, name: "Link 1", color: "#CAD3C8", href: "#" },
  { id: 2, name: "Link 2", color: "#CAD3C8", href: "#" },
  { id: 3, name: "Link 3", color: "#CAD3C8", href: "#" },
  { id: 4, name: "Link 4", color: "#CAD3C8", href: "#" }
]

const Header = ({ title }) => {
  return (
    <Row className="header-main">
      <div className="header-container">
        <Navbar>
          <NavbarBrand href="#" className="title">   
            <Text text={title ? title : ''} size={'medium'} color={"#f5f6fa"}/>
          </NavbarBrand>
          { NavLinks &&
            <Nav className="links">
              { NavLinks.map((items, index) => (
                <NavLink key={index} id={items.id} href={items.href}><Text text={items.name} color={items.color}/></NavLink>
              )) 
            }
            </Nav>
          }
        </Navbar>
      </div>
      <Drawings color={"#3B3B98"}/>
    </Row>
  )
}


export default Header;