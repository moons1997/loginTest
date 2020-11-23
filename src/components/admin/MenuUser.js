import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";
import { BiExit } from "react-icons/bi";
import styled from "styled-components";
import { contextApi } from "../../services/Context";
import Navs from "../Navs";
const MenuUser = ({ status, textColor }) => {
  const { menu, menuChild, logOutUser, changeLight, light } = useContext(
    contextApi
  );
  const MenuUserWrapper = styled.div`
    // a {
    //   color: ${textColor};
    // }
    // .navbar-light .navbar-nav .nav-link {
    //   color: ${textColor};
    // }
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
      background: rgb(227, 230, 236);
    }
    .out {
      color: #fff;
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
    <MenuUserWrapper>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>Brand</Navbar.Brand>

        <div className="mob ml-auto">
          {status && (
            <div>
              <Link to={status}>{status}</Link>
              <Link onClick={logOutUser} to="/" className="ml-3">
                <BiExit size={"25"} />
              </Link>
            </div>
          )}
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navs menu={menu} menuChild={menuChild} status={status} />

          <div className="deck">
            {status && (
              <div>
                {status}
                <Link onClick={logOutUser} to="/" className="ml-3">
                  <BiExit size={"25"} className="out" />
                </Link>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </MenuUserWrapper>
  );
};

export default MenuUser;
