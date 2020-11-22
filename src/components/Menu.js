import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { contextApi } from "../services/Context";
import styled from "styled-components";

const Menu = ({ textColor }) => {
  const { menu, menuChild, status, logOut, changeLight, light } = useContext(
    contextApi
  );
  const MenuWrapper = styled.div`
    a {
      color: ${textColor};
    }
    .navbar-light .navbar-nav .nav-link {
      color: ${textColor};
    }
    .mob {
      display: none;
    }
    .form_m {
      display: inline-block;
      margin-left: 5px;
    }
    .dropdown-menu {
      background: transparent;
    }
    .dropdown-item:hover,
    .dropdown-item:focus {
      background: rgba(255, 255, 255, 0.5);
    }
    @media screen and (max-width: 768px) {
      .deck {
        display: none;
      }
      .mob {
        display: block;
        margin-right: 10px;
      }
    }
  `;

  return (
    <MenuWrapper>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/">Brand</Link>
        </Navbar.Brand>
        <div className="mob ml-auto">
          {status ? (
            <div>
              {status}
              <Link onClick={logOut} to="/" className="ml-3">
                <BiExit size={"25"} />
              </Link>
            </div>
          ) : (
            <Link to="/login">login</Link>
          )}
          <Form className="form_m ">
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={light}
              // defaultChecked={true}
              onChange={changeLight}
            />
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menu.map(
              (item) =>
                item.type === status &&
                (item.child ? (
                  <NavDropdown
                    title={item.title}
                    id="basic-nav-dropdown"
                    key={item.id}
                  >
                    {item.child &&
                      menuChild.map(
                        (child) =>
                          item.id === child.parentId && (
                            <NavDropdown.Item href={child.url} key={child.id}>
                              {child.title}
                            </NavDropdown.Item>
                          )
                      )}
                  </NavDropdown>
                ) : (
                  <Nav.Link href={item.url} key={item.id}>
                    {item.title}
                  </Nav.Link>
                ))
            )}
          </Nav>
          <div className="deck">
            {status ? (
              <div>
                {status}
                <Link onClick={logOut} to="/" className="ml-3">
                  <BiExit size={"25"} />
                </Link>
              </div>
            ) : (
              <Link to="/login">login</Link>
            )}
            <Form className="form_m">
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={light}
                // defaultChecked={true}
                onChange={changeLight}
              />
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </MenuWrapper>
  );
};

export default Menu;
